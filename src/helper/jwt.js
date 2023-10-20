import {jwtVerify,SignJWT} from 'jose'


async function GenAccessToken(data){
    var token = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2m')
    .setIssuedAt()
    .sign(new TextEncoder().encode(process.env.SECRET_KEY));

    return token
}



async function JWTVerify(token){
    try {
        var {payload} = await jwtVerify(token,new TextEncoder().encode(process.env.SECRET_KEY))
        return payload

    } catch (error) {
        return false
    }

}


module.exports = {
    GenAccessToken,
    JWTVerify
}
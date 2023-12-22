import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";
//
export default function Loginform() {
  const Router = useRouter();

  const { register, reset, handleSubmit } = useForm();

  const submit = async (e) => {
    var res = await axios.post("/api/user/login", e);
    console.log(res.data.success);

    if (res.data.success === true) {
      toast.success(res.data.message);
      reset();
      setTimeout(() => {
        Router.push("/dashboard");
      }, 1000);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container">
        <input id="signup_toggle" type="checkbox" />
        <form onSubmit={handleSubmit(submit)} className="form">
          <div className="form_front">
            <div className="form_details">Login</div>
            <input
              {...register("username")}
              type="text"
              className="input"
              placeholder="Username"
            />
            <input
              {...register("password")}
              type="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

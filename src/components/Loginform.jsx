import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {  useRouter } from "next/router";
export default function Loginform() {

  const Router = useRouter()

  const { register, reset, handleSubmit } = useForm();

  const submit = async (e) => {
    var res = await axios.post("/api/user/login",e);
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
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffdbac96] to-[#9fc5e896] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 backdrop-blur-lg bg-[#00000076] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="min-w-[400px] mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Welcome Back</h1>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4  sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      {...register("username")}
                      type="text"
                      className="px-4 h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      {...register("password")}
                      type="password"
                      className="px-4 h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative">
                    <Button color="primary" variant="faded">
                      <input type="submit" />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

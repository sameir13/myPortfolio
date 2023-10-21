import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function Loginform() {
  const { register, reset, handleSubmit } = useForm();

  return (
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-[#ffdbac96] to-[#9fc5e896] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 backdrop-blur-lg bg-[#00000076] shadow-lg sm:rounded-3xl sm:p-20">
        <div class="min-w-[400px] mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Welcome Back</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4  sm:text-lg sm:leading-7">
              <div class="relative">
                <input
                  autocomplete="off"
                  id="email"
                  {...register("username")}
                  type="text"
                  class="px-4 h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                />
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="password"
                  {...register("username")}
                  type="password"
                  class="px-4 h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
              </div>
              <div class="relative">
                <Button color="primary" variant="faded">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

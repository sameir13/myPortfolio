import { Button } from "@nextui-org/react";

const login = () => {
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
                  name="email"
                  type="text"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-white   text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
                <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
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
};

export default login;

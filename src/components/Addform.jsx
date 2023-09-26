"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Select, SelectItem, Input } from "@nextui-org/react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Addblog = () => {
  const [tempImg, setTemImg] = useState("");

  var Router = useRouter();

  const catagories = [
    { name: "Tech" },
    { name: "Life Style" },
    { name: "News" },
    { name: "Crimes" },
  ];

  // react hook from -----------------------------------

  const { control, register, reset, handleSubmit } = useForm({
    defaultValues: {
      blogimg: "",
    },
  });

  //  submitform function ---------------------------------

  const submitForm = async (e) => {
    const imageUrl = await UploadImageToCloudinary();
    e.blogimg = imageUrl;
    if (imageUrl) {
      var res = await fetch("/api/blog", {
        body: JSON.stringify(e),
        method: "POST",
        headers: { "content-Type": "application/json" },
      });

      res = await res.json();

      if (res.success) {
        toast.success(res.message);
        reset();
        setTemImg(null);
        setTimeout(() => {
          // Router.push("/home");
        }, 2000);
      } else {
        toast.error(res.message);
      }
    } else toast.error("Please Upload imge");
  };

  // cloudnairy --------------------------------------

  const UploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", tempImg);
      data.append("upload_preset", "upload_img");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/onlineupload/image/upload",
        {
          body: data,
          method: "POST",
        }
      );
      const jsonimg = await res.json();
      console.log(jsonimg.secure_url);
      return jsonimg.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
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
      <div className=" relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="max-w-3xl m-auto">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-white font-bold">New Blog</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <Input type="text" placeholder="Title" {...register("title")} />
              </div>
              <div className="col-span-full flex gap-2">
                <Input
                  type="text"
                  className="w-6/12"
                  placeholder="Subtitle"
                  {...register("subtitle")}
                />
                <Input
                  type="text"
                  className="w-6/12"
                  placeholder="Author Name"
                  {...register("authorname")}
                />
              </div>
              <div>
                <Select
                  label="Select a catagory"
                  className="w-6/12"
                  {...register("catagory")}
                >
                  {catagories.map((v, i) => (
                    <SelectItem key={v.name} value={v.name}>
                      {v.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-500">
                  Discription
                </label>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <JoditEditor {...field} className="text-black bg-black" />
                  )}
                />
              </div>
              {tempImg ? (
                <div className="w-full border">
                  <img src={URL.createObjectURL(tempImg)} />
                  <i onClick={() => setTemImg(null)} className="bx bx-x"></i>
                </div>
              ) : (
                <div className="w-full border rounded-xl  p-5 text-center bg-[#f9f9f987]">
                  <label
                    className="block mb-3 text-sm font-medium text-black"
                    htmlFor="image"
                  >
                    <div>
                      <i className="bx bx-cloud-upload"></i>
                    </div>
                    <div>Upload Image</div>
                  </label>
                  <input
                    type="file"
                    hidden
                    id="image"
                    onChange={(e) => {
                      setTemImg(e.target.files[0]);
                    }}
                  />
                </div>
              )}
              <div className="col-span-full">
                <button
                  type="submit"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Submit your request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Addblog;

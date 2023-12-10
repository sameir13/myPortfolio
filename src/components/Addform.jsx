import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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

  const { register, reset, handleSubmit } = useForm({});

  //  submitform function ---------------------------------

  const submitForm = async (e) => {
    const imageUrl = await UploadImageToCloudinary();
    e.img = imageUrl;
    if (imageUrl) {
      var res = await fetch("/api/projects", {
        body: JSON.stringify(e),
        method: "POST",
        headers: { "content-Type": "application/json" },
      });

      res = await res.json();

      if (res.success) {
        toast.success(res.message);
        reset();
        setTemImg(null);
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
    <section className="w-full ">
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
      <form
        className="w-[60%] m-auto max-md:w-[95%] "
        onSubmit={handleSubmit(submitForm)}
      >
        <h2 className="text-4xl mb-10 bg-slate-700 py-4 px-2">Project Add Form</h2>
        <div className="space-y-8 px-2">
          <div className="col-span-full">
            <input
              type="text"
              className="w-full bg-transparent  border py-1 px-2 rounded-sm capitalize"
              placeholder="Title"
              {...register("title")}
            />
          </div>
          <div className="col-span-full flex gap-2">
            <input
              type="text"
              className="w-6/12 bg-transparent border py-1 px-2 rounded-sm capitalize"
              placeholder="Subtitle"
              {...register("subtitle")}
            />
            <select
              label="Select a catagory"
              className="w-6/12 bg-transparent border py-1 px-2 rounded-sm"
              {...register("catagory")}
            >
              {catagories.map((v, i) => (
                <option className="bg-[#2c2b2b]" key={i} value={v.name}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-full">
            <textarea
              type="text"
              className="w-full bg-transparent  border py-1 px-2 rounded-sm capitalize"
              placeholder="description"
              {...register("desc")}
            />
          </div>
          {tempImg ? (
            <div className="w-full border">
              <Image
                width={700}
                height={700}
                alt=""
                src={URL.createObjectURL(tempImg)}
              />
              <i onClick={() => setTemImg(null)} className="bx bx-x"></i>
            </div>
          ) : (
            <div className="rounded-sm  p-5 text-center bg-[#6553458e]">
              <label className="block mb-3 font-medium " htmlFor="image">
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
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2 border-white rounded-sm nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            >
              Submit Project
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Addblog;

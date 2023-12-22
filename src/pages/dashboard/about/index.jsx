import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layoutd from "../layoutd";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";

const Index = () => {
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/about?_id=6584c38162d394616ef0bc8d"
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = useForm({
    defaultValues: user?.message || {}, // Set defaultValues to user.message if available
  });

  useEffect(() => {
    if (user?.message) {
      Object.keys(user.message).forEach((key) => {
        setValue(key, user.message[key]);
      });
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      if (!isDirty) {
        toast.error("Data is Same");
        return;
      }

      const res = await axios.put("/api/about?_id=6584c38162d394616ef0bc8d", {
        ...data,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setDisable(true);
        !isDirty;
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error submitting form:", error);
    }
  };
  const handleEditClick = (event) => {
    event.preventDefault();
    setDisable(false);
  };

  const handleCancelClick = (event) => {
    event.preventDefault(); // Prevents the form submission
    setDisable(true);
  };
  return (
    <>
      <Layoutd>
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
        <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  justify-center items-center h-full">
            <section className="w-1/2  relative">
              <fieldset className="w-full border border-gray-500 grid grid-cols-2 gap-10 py-10 px-10 bg-[#1a1919] rounded-lg">
                <legend>Personal Data</legend>
                <div>
                  <label htmlFor="">Name :</label>
                  <input
                    disabled={disable}
                    required
                    {...register("Name")}
                    className="bg-transparent border-b py-2 px-2 font-serif disabled:border-none "
                    placeholder="Name"
                    type="text"
                    defaultValue={user?.message?.Name || ""}
                  />
                </div>
                <div>
                  <label htmlFor="">Email :</label>
                  <input
                    disabled={disable}
                    required
                    {...register("email")}
                    className="bg-transparent border-b py-2 px-2 font-serif disabled:border-none "
                    placeholder="Email Address"
                    type="email"
                    defaultValue={user?.message?.email || ""}
                  />
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <label htmlFor="">About me :</label>

                  <textarea
                    disabled={disable}
                    required
                    {...register("description")}
                    className="bg-transparent border-b py-2 px-2  font-serif h-max disabled:border-none "
                    placeholder="Description"
                    type="text"
                    defaultValue={user?.message?.description || ""}
                  />
                </div>
                <div className="w-full flex justify-end gap-4 col-span-2">
                  {disable ? (
                    <button
                      className="bg-green-700 py-2 px-4 rounded-lg"
                      onClick={handleEditClick}
                    >
                      <i className="bx bxs-edit-alt mr-4"></i>Edit
                    </button>
                  ) : (
                    <>
                      <button
                        className="bg-red-700 py-2 px-4 rounded-lg"
                        onClick={handleCancelClick}
                      >
                        <i className="bx bx-x mr-4"></i>Cancel
                      </button>
                      <div className="relative">
                        <i className="bx bx-check-double absolute bottom-3 left-3"></i>
                        <input
                          disabled={!isDirty}
                          className="bg-blue-700 py-2 px-4 pl-10 rounded-lg cursor-pointer disabled:bg-gray-600 disabled:opacity-50 duration-200"
                          type="submit"
                        />
                      </div>
                    </>
                  )}
                </div>
              </fieldset>
              <div className="absolute -top-16 -right-16 flex justify-center ">
                <Image
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] border-4 border-gray-700 rounded-full object-cover opacity-90"
                  src="/me.png"
                  alt="me"
                />
              </div>
            </section>
          </div>
        </form>
      </Layoutd>
    </>
  );
};

export default Index;

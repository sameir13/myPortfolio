import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import {
  Textarea,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";

const singleblog = () => {
  const router = useRouter();
  const slug = router?.query?.slug;

  // Update Comment -------------------------------------------

  const [comment, setcomment] = useState({
    comment: "",
    username: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcomment({ ...comment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/api/blog/${slug}?comments=POST`, {
        ...comment,
      });

      if (res) {
        toast.success("Comment Added");
        router.push(`/blogs/${slug}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update Comment -------------------------------------------

  // Fetch ----------------------------------------------------

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", slug],
    queryFn: async () =>
      await fetch(`/api/blog/${slug}`).then((res) => res.json()),
      refetchInterval: 5000,
  });

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;

  // Fetch --------------------------------------------------------

  // Delete Comment -------------------------------------------
  const delcom = async (_id) => {
    console.log(_id);
    try {
      const res = await axios.put(`/api/blog/${slug}?comments=DELETE`, {
        _id,
      });
      console.log(res);

      if (res.data.success == true) {
        toast.success(res.data.message);
      } else {
        toast.error("Unknow Error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Delete Comment -------------------------------------------

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div>
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
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src=""
                    alt={data?.message?.authorname}
                  />
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {data?.message?.authorname}
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {new Date().toDateString(data?.message?.createdAt)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {data?.message?.title}
              </h1>
            </header>
            <div
              className="lead"
              dangerouslySetInnerHTML={createMarkup(data?.message?.description)}
            />
            {/* Comment Section */}
            <section className=" mt-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  ({data?.message?.comments.length}) Discussion
                </h2>
              </div>
              {/* Comments Form */}
              <form className="mb-6" onSubmit={handleSubmit}>
                <div className="py-2 px-4 mb-4 flex flex-col gap-3">
                  <Input
                    id="username"
                    onChange={handleChange}
                    name="username"
                    value={comment.username}
                    variant="bordered"
                    className="px-0 w-full text-sm"
                    placeholder="Write your username"
                    required
                  />
                  <Textarea
                    id="comment"
                    onChange={handleChange}
                    name="comment"
                    value={comment.comment}
                    variant="bordered"
                    className="px-0 w-full text-sm"
                    placeholder="Write a comment..."
                    required
                  />
                  <Button
                    type="submit"
                    variant="bordered"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center"
                  >
                    Post comment
                  </Button>
                </div>
              </form>
              {/* Comments Form */}
              {data?.message?.comments?.reverse().map((v, i) => (
                <div className="py-2 px-4 mb-6">
                  <Card key={i} className=" text-base">
                    <CardHeader className="flex justify-between items-center">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          />
                          {v.username}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time>{new Date().toDateString(v.createdAt)}</time>
                        </p>
                      </div>
                      <i
                        className="bx bxl-xing"
                        onClick={() => delcom(v._id)}
                      ></i>
                    </CardHeader>
                    <CardBody>
                      <p>{v.comment}</p>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </section>
            {/* Comment Section */}
          </article>
        </div>
      </main>
    </div>
  );
};

export default singleblog;

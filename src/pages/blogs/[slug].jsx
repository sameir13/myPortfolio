import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@nextui-org/react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const singleblog = () => {
  const router = useRouter();
  const slug = router?.query?.slug;

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

  function createMarkup(c) {
    return { __html: c };
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", slug],
    queryFn: async () =>
      await fetch(`/api/blog/${slug}`).then((res) => res.json()),
  });

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;

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
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full"
                    src=""
                    alt={data?.message?.authorname}
                  />
                  <div>
                    <p class="text-xl font-bold text-gray-900 dark:text-white">
                      {data?.message?.authorname}
                    </p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        {new Date().toDateString(data?.message?.createdAt)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {data?.message?.title}
              </h1>
            </header>
            <div
              class="lead"
              dangerouslySetInnerHTML={createMarkup(data?.message?.description)}
            />
            <section class="not-format mt-5">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  ({data?.message?.comments.length}) Discussion
                </h2>
              </div>

              <form class="mb-6" onSubmit={handleSubmit}>
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="username" class="sr-only">
                    Your comment
                  </label>
                  <input
                    id="username"
                    rows="6"
                    onChange={handleChange}
                    name="username"
                    value={comment.username}
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write your username"
                    required
                  ></input>
                </div>
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    onChange={handleChange}
                    name="comment"
                    value={comment.comment}
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>

              {data?.message?.comments
                ?.sort()
                .reverse()
                .slice(0, 4)
                .map((v, i) => (
                  <Card
                    key={i}
                    class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 border"
                  >
                    <footer class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                          <img
                            class="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Michael Gough"
                          />
                          {v.username}
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          <time
                            pubdate
                            datetime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            {new Date().toDateString(v.createdAt)}
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p>{v.comment}</p>
                  </Card>
                ))}
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default singleblog;

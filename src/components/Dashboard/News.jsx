import Link from "next/link";
import React from "react";

const News = () => {
  return (
  <p>News</p>
    // <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
    //   <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
    //     <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
    //       <div className="flex flex-col space-y-8 md:space-y-12">
    //         <div className="flex flex-col space-y-2">
    //           <h3 className="flex items-center space-x-2 dark:text-gray-400">
    //             <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
    //             <span className="text-xs font-bold tracki uppercase">
    //               Exclusive
    //             </span>
    //           </h3>
    //           <Link
    //             rel="noopener noreferrer"
    //             href="#"
    //             className="font-serif hover:underline"
    //           >
    //             Donec sed elit quis odio mollis dignissim eget et nulla.
    //           </Link>
    //           <p className="text-xs dark:text-gray-400">
    //             47 minutes ago by
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:underline dark:text-violet-400"
    //             >
    //               Leroy Jenkins
    //             </Link>
    //           </p>
    //         </div>
    //         <div className="flex flex-col space-y-2">
    //           <h3 className="flex items-center space-x-2 dark:text-gray-400">
    //             <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
    //             <span className="text-xs font-bold tracki uppercase">
    //               Exclusive
    //             </span>
    //           </h3>
    //           <Link
    //             rel="noopener noreferrer"
    //             href="#"
    //             className="font-serif hover:underline"
    //           >
    //             Ut fermentum nunc quis ipsum laoreet condimentum.
    //           </Link>
    //           <p className="text-xs dark:text-gray-400">
    //             2 hours ago by
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:underline dark:text-violet-400"
    //             >
    //               Leroy Jenkins
    //             </Link>
    //           </p>
    //         </div>
    //         <div className="flex flex-col space-y-2">
    //           <h3 className="flex items-center space-x-2 dark:text-gray-400">
    //             <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
    //             <span className="text-xs font-bold tracki uppercase">
    //               Exclusive
    //             </span>
    //           </h3>
    //           <Link
    //             rel="noopener noreferrer"
    //             href="#"
    //             className="font-serif hover:underline"
    //           >
    //             Nunc nec ipsum lobortis, pulvinar neque sed.
    //           </Link>
    //           <p className="text-xs dark:text-gray-400">
    //             4 hours ago by
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:underline dark:text-violet-400"
    //             >
    //               Leroy Jenkins
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col w-full space-y-2">
    //         <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
    //           <div className="w-1/2 h-full dark:bg-violet-400"></div>
    //         </div>
    //         <Link
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="flex items-center justify-between w-full"
    //         >
    //           <span className="text-xs font-bold tracki uppercase">
    //             See more exclusives
    //           </span>
    //           <svg
    //             viewBox="0 0 24 24"
    //             strokeWidth="2.5"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="w-4 strokeCurrent dark:text-violet-400"
    //           >
    //             <line x1="5" y1="12" x2="19" y2="12"></line>
    //             <polyline points="12 5 19 12 12 19"></polyline>
    //           </svg>
    //         </Link>
    //       </div>
    //     </div>
    //     <div
    //       className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
    //       style={{
    //         backgroundImage:
    //           "url('https://source.unsplash.com/random/239x319')",
    //       }}
    //     >
    //       <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">
    //         paris, france
    //       </span>
    //       <Link className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
    //         <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
    //           <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
    //             <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
    //           </span>
    //           <span className="text-sm font-bold">Live</span>
    //         </span>
    //         <h1
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100"
    //         >
    //           Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec
    //           venenatis?
    //         </h1>
    //       </Link>
    //     </div>
    //     <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
    //       <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
    //         <button
    //           type="button"
    //           className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400"
    //         >
    //           Latest
    //         </button>
    //         <button
    //           type="button"
    //           className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400"
    //         >
    //           Popular
    //         </button>
    //       </div>
    //       <div className="flex flex-col divide-y dark:divide-gray-700">
    //         <div className="flex px-1 py-4">
    //           <img
    //             alt=""
    //             className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
    //             src="https://source.unsplash.com/random/244x324"
    //           />
    //           <div className="flex flex-col flex-grow">
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="font-serif hover:underline"
    //             >
    //               Aenean ac tristique lorem, ut mollis dui.
    //             </Link>
    //             <p className="mt-auto text-xs dark:text-gray-400">
    //               5 minutes ago
    //               <Link
    //                 rel="noopener noreferrer"
    //                 href="#"
    //                 className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
    //               >
    //                 Politics
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex px-1 py-4">
    //           <img
    //             alt=""
    //             className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
    //             src="https://source.unsplash.com/random/245x325"
    //           />
    //           <div className="flex flex-col flex-grow">
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="font-serif hover:underline"
    //             >
    //               Nulla consectetur efficitur.
    //             </Link>
    //             <p className="mt-auto text-xs dark:text-gray-400">
    //               14 minutes ago
    //               <Link
    //                 rel="noopener noreferrer"
    //                 href="#"
    //                 className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
    //               >
    //                 Sports
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex px-1 py-4">
    //           <img
    //             alt=""
    //             className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
    //             src="https://source.unsplash.com/random/246x326"
    //           />
    //           <div className="flex flex-col flex-grow">
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="font-serif hover:underline"
    //             >
    //               Vitae semper augue purus tincidunt libero.
    //             </Link>
    //             <p className="mt-auto text-xs dark:text-gray-400">
    //               22 minutes ago
    //               <Link
    //                 rel="noopener noreferrer"
    //                 href="#"
    //                 className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
    //               >
    //                 World
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex px-1 py-4">
    //           <img
    //             alt=""
    //             className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
    //             src="https://source.unsplash.com/random/247x327"
    //           />
    //           <div className="flex flex-col flex-grow">
    //             <Link
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="font-serif hover:underline"
    //             >
    //               Suspendisse potenti.
    //             </Link>
    //             <p className="mt-auto text-xs dark:text-gray-400">
    //               37 minutes ago
    //               <Link
    //                 rel="noopener noreferrer"
    //                 href="#"
    //                 className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
    //               >
    //                 Business
    //               </Link>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default News;

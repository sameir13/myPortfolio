import React from "react";
import { Blogfetch } from "@/hooks/queryfetchblogs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Layout from "../dashboardlayout";

export default function App() {
  var [selectedKey, setkey] = useState([]);
  var [checks, setcheck] = useState(false);

  // * Selecting From the List through checkbox---------------------

  const handleSelect = (i) => {
    var id = i;
    if (!selectedKey.includes(id)) {
      var copy = selectedKey;
      copy.push(id);
      setkey(copy);
      console.log(selectedKey);
    } else {
      const index = selectedKey.indexOf(id);
      selectedKey.splice(index, 1);
      console.log(selectedKey);
    }
  };
  // * Selecting From the List through checkbox---------------------
  // ! Deleting From the List --------------------------------------
  const del = async (arr) => {
    if (arr.length > 0) {
      arr.map(async (v) => {
        console.log(v);
        var res = await axios.delete(`api/blog/${v}`);
        if (res.data.success) {
          toast.success(res.data.message);
        }
      });
    }
    toast.error("Please select item to Delete");
  };

  const checkin = () => {
    if (checks == true) {
      setcheck(false);
    } else {
      setcheck(true);
    }
  };
  // ! Deleting From the List --------------------------------------
  // ? Fetching Data -----------------------------------------------

  const { isLoading, error, data } = Blogfetch();

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;
  // ? Fetching Data -----------------------------------------------

  return (
    <Layout>
      <div className="px-4 relative top-0">
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
        <div className="grid h-60 w-full place-items-center ">
          <h2 className="text-6xl font-extrabold text-white">BLOG LIST</h2>
        </div>
        <div className="my-3 flex justify-end gap-4 px-4">
          <button onClick={() => checkin()}>
            <i className="bx bxs-select-multiple"></i>
            Select All
          </button>
          <button onClick={() => del(selectedKey)} color="danger">
            <i className="bx bxs-trash-alt"></i>
            Delete
          </button>
        </div>

        <table>
          <th>
            <thead>Action</thead>
            <thead>Title</thead>
            <thead>Author</thead>
            <thead></thead>
          </th>
          <tbody items={data.message}>
            {/* {data?.message?.map((v, i) => (
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    id="check"
                    onChange={(e) => {
                      handleSelect(v.slug);
                    }}
                  />
                </td>
                <td className="line-clamp-1 leading-10">{v.title}</td>
                <td>{v.authorname}</td>
                <td className="text-right">
                  <button color="secondary">
                    <i className="bx bxs-edit-alt"></i>
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

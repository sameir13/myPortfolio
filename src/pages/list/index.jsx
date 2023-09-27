import React from "react";
import { blogfetch } from "@/hooks/queryfetchblogs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

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

  const { isLoading, error, data } = blogfetch();

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;
  // ? Fetching Data -----------------------------------------------

  return (
    <div className="px-4">
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
      <div className="w-full grid place-items-center h-80 ">
        <h2 className="text-white text-6xl font-extrabold">BLOG LIST</h2>
      </div>
      <div className="my-3 flex justify-end px-4 gap-4">
        <Button onClick={() => checkin()}>
          <i className="bx bxs-select-multiple"></i>
          Select All
        </Button>
        <Button onClick={() => del(selectedKey)} color="danger">
          <i className="bx bxs-trash-alt"></i>
          Delete
        </Button>
      </div>

      <Table aria-label="Controlled table example with dynamic content">
        <TableHeader>
          <TableColumn>Action</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Author</TableColumn>
          <TableColumn></TableColumn>
        </TableHeader>
        <TableBody items={data.message}>
          {data?.message?.map((v, i) => (
            <TableRow key={i}>
              <TableCell>
                <input
                  type="checkbox"
                  id="check"
                  onChange={(e) => {
                    handleSelect(v.slug);
                  }}
                />
              </TableCell>
              <TableCell className="line-clamp-1 leading-10">
                {v.title}
              </TableCell>
              <TableCell>{v.authorname}</TableCell>
              <TableCell className="text-right">
                <Button color="secondary">
                  <i className="bx bxs-edit-alt"></i>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

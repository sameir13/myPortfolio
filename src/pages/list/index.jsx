import React from "react";
import { blogfetch } from "@/hooks/queryfetchblogs";
import { useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Radio,
} from "@nextui-org/react";
import axios from "axios";

export default function App() {
  var [selectedKey, setkey] = useState([]);
  var [check, setcheck] = useState(false);

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

  const del = async (id) => {
    var res = await axios.delete(`api/blog/${id}`);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };
  const { isLoading, error, data } = blogfetch();

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;

  return (
    <>
      <div className="border">
        {selectedKey.length > 0 ? "yess" : null}
        <i class="bx bxs-trash-alt" onChange={del([...selectedKey])}></i>
      </div>
      <Table aria-label="Controlled table example with dynamic content">
        <TableHeader>
          <TableColumn>
            <input type="checkbox" name="" />
          </TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody items={data.message}>
          {data?.message?.map((v, i) => (
            <TableRow key={i}>
              <TableCell>
                <fieldset>
                  <input
                    type="checkbox"
                    id="check"
                    capture
                    onChange={(e) => (
                      handleSelect(v._id), setcheck(e.target.checked)
                    )}
                  />
                </fieldset>
              </TableCell>
              <TableCell>{v.title}</TableCell>
              <TableCell>{v.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

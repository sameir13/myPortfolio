import Layoutd from "./layoutd";
import { Blogfetch } from "@/hooks/queryfetchblogs";
import{ useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function App() {
  var [selectedKey, setkey] = useState([]);
  var [checks, setcheck] = useState(false);

  // ? Dialog -------------------------------------------------------
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  const openDialog = () => {
    setIsDialogOpen(true);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    dialogRef.current.close();
  };

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
  const deleting = async (slug) => {
    var res = await axios.delete(`/api/blog/${slug}`);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };
  const del = async (arr) => {
    if (!arr.length > 0) {
      toast.error("Please select item to Delete");
    }
    arr?.map(async (v) => {
      console.log(v);
      deleting(v);
    });
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
    <Layoutd>
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
        <div className="grid h-60 w-full place-items-center ">
          <h2 className="text-6xl font-extrabold text-white">BLOG LIST</h2>
        </div>
        <div className="text-sm my-3 flex justify-end gap-4 px-4">
          <button
            onClick={() => checkin()}
            className="bg-orange-400 py-1 px-2 rounded-sm flex items-center justify-between gap-1"
          >
            <i className="bx bxs-select-multiple"></i>
            Select All
          </button>
          <button
            onClick={() => del(selectedKey)}
            className="bg-red-500 py-1 px-2 rounded-sm flex items-center justify-between gap-1"
          >
            <i className="bx bxs-trash-alt"></i>
            Delete
          </button>
        </div>
        <section className="data-table overflow-x-auto py-4   w-full">
          <table className="min-w-[1000px] w-full border">
            <tr>
              <th className="w-1">Action</th>
              <th className="text-left">Title</th>
              <th>Author</th>
              <th></th>
            </tr>
            <tbody items={data.message}>
              {data?.message?.map((v, i) => (
                <tr key={i}>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      id="check"
                      onChange={() => {
                        handleSelect(v.slug);
                      }}
                    />
                  </td>
                  <td className="line-clamp-1">{v.title}</td>
                  <td className="text-center">{v.authorname}</td>
                  <td>
                    <div className="flex justify-around">
                      <button>
                        <i className="bx bxs-edit-alt"></i>
                      </button>
                      <button onClick={() => deleting(v.slug)}>
                        <i class="bx bxs-trash-alt text-red-600"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <dialog ref={dialogRef} className="place-content-center bg-[#00000073] text-white">
          <p>Greetings, one and all!</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>
        <button onClick={openDialog}>Show the dialog</button>
      </div>
    </Layoutd>
  );
}

import { MdClose, MdDelete } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const ComposeEmail = ({ handleOnClick }) => {
  const inputStyles =
    "pl-2 text-slate-500 rounded-lg py-3 border-[2px] border-slate-300 outline-slate-200 hover:border-slate-200 hover:shadow-lg transition duration-500 ease-in-out ";

  return (
    <div className="flex flex-col flex-1 h-full px-6 ">
      <div className="flex justify-between bg-slate-100 px-4">
        <p>New Message</p>
        <button
          onClick={() => {
            // Functionality to save to draft
            handleOnClick();
          }}
        >
          <MdClose size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <input
          placeholder="To"
          className={`${inputStyles} mt-4`}
          type="text"
          id="email-to"
        />
        <input
          placeholder="Subject"
          className={`${inputStyles}`}
          type="text"
          id="email-subject"
        />
        <textarea
          placeholder="Body"
          className={`${inputStyles} h-40 max-h-40 min-h-40`}
          id="email-body"
        />
      </div>
      <div className="px-4 bg-slate-100 flex justify-between items-center py-2 mt-auto">
        <button className="flex gap-2 items-center bg-blue-700 py-1 px-4 rounded-lg text-white">
          Send <IoSend size={15} />
        </button>
        <div className="flex gap-1">
          <label className="cursor-pointer">
            <IoMdAttach size={24} />
            <input type="file" className="hidden" />
          </label>
          <button onClick={handleOnClick}>
            <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;

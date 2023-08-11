import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import CategoriesData from "./Categories";
import RichTextEditor from "./RichTextEditor";

const apiKey = "eyfr8kxj0adbp6n1bcpf3fw7fb6vn33tda9jkkkcbzifpjm8";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  function publishHandler() {
    console.log(content);
    console.log(title)
    console.log(category)
  }

  return (
    <div className="flex flex-col w-full h-full bg-gray-200 py-2 gap-4">
      <div className="flex justify-between items-center border-b-[1px] border-b-gray-400 px-8 py-2">
        <AiOutlineArrowLeft className="text-2xl md:text-3xl text-gray-500 hover:text-dark cursor-pointer" />

        {/* publish button */}
        <button
          className="text-sm md:text-base flex items-center gap-2 border-2 border-gray-400 outline-none bg-white  px-4 py-2 rounded-lg focus:ring-1 focus:ring-dark font-medium"
          onClick={publishHandler}
        >
          <IoMdSend />
          Publish
        </button>
      </div>

      <div className="w-full flex flex-col items-center gap-4 px-8 ">
        <div className="w-full">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter Title here..."
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border-gray-100 border-2 rounded-md shadow-sm text-sm sm:text-base"
          />
        </div>
        <div className="w-full ">
          <label htmlFor="content">Content</label>
          <RichTextEditor
            apiKey={apiKey}
            setContent={setContent}
            value={content}
          />
        </div>
        <div className="w-full">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border-gray-100 border-2 rounded-md shadow-sm text-sm sm:text-base"
          >
            {CategoriesData.map((value) => (
              <option htmlFor={value.catValue}>{value.category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const [titleInput, setTitleInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const router = useRouter();
  console.log(titleInput);
  console.log(categoryInput);
  return (
    <>
      <div className="flex flex-col">
        <label>Title</label>
        <input
          type="text"
          className="border w-96 p-2 rounded-md bg-gray-100 mb-12 mt-2"
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
          value={titleInput}
        />
        <label>Catagory</label>
        <input
          type="text"
          className="border w-96 p-2 rounded-md bg-gray-100 mb-12 mt-2"
          onChange={(e) => {
            setCategoryInput(e.target.value);
          }}
          value={categoryInput}
        />
      </div>
      <div className=" space-x-8">
        <button
          className="bg-gray-100 py-3 px-16 rounded-2xl"
          onClick={() => {
            setTitleInput("");
            setCategoryInput("");
          }}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 py-3 px-16 rounded-2xl text-white"
          onClick={() => {
            if (titleInput.trim().length === 0) {
              return alert("you must at least fill the title input");
            } else {
              router.push("/");
            }
          }}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default Form;

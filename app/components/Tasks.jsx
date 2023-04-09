"use client";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/action";
import { useState } from "react";
import Link from "next/link";

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const selector = useSelector((state) => {
    return state.todoReducer.list;
  });
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl mt-6 mb-6">All Tasks</h1>
      <input
        type="text"
        className="w-11/12 p-3 pl-4 mb-12 bg-slate-100 rounded-xl text-lg"
        placeholder="Search something..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <ul className="w-11/12 ">
        {selector
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.titleData
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <li
                className="flex justify-between border-b pb-4 mb-6"
                key={item.id}
              >
                <div className="flex items-center justify-center space-x-3">
                  <input
                    id="published"
                    type="checkbox"
                    onClick={() => {}}
                    className="peer/published p-3 rounded-lg"
                  />
                  <lebel
                    for="published"
                    className="peer-checked/published:text-gray-500 peer-checked/published:line-through"
                  >
                    {item.titleData}
                  </lebel>
                </div>

                <div className="flex items-center space-x-6 text-blue-500">
                  <TbTrash
                    size="1.5em"
                    className=" hover:text-red-600"
                    onClick={() => {
                      dispatch(removeTodo(item.id));
                    }}
                  />
                  <span className="font-bold capitalize">
                    {item.categoryData.trim().length === 0
                      ? "Uncategorized"
                      : item.categoryData}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
      <Link href="/add-task">
        <button className=" absolute bottom-4 right-4 text-white text-3xl pb-0.5 bg-blue-500 rounded-full w-12 h-12 font-mono flex justify-center items-center font-medium border-solid border-white border-2">
          +
        </button>
      </Link>
    </>
  );
};

export default Tasks;

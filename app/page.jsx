"use client";
import InitialPage from "./components/InitialPage";
import Categories from "./components/Categories";
import Tasks from "./components/Tasks";
import { useSelector } from "react-redux";

export default function Home() {
  const selector = useSelector((state) => {
    return state.todoReducer.list;
  });
  return (
    <>
      {selector.length === 0 && <InitialPage />}
      {selector.length > 0 && (
        <main className="bg-white max-w-4xl my-12 mx-auto rounded-2xl shadow-lg flex">
          <Categories />
          <div className="w-4/5 flex flex-col items-center px-6 relative">
            <Tasks />
          </div>
        </main>
      )}
    </>
  );
}

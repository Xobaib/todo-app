import Image from "next/image";
import folder from "../folder.svg";
import Link from "next/link";

const InitialPage = () => {
  return (
    <main className="bg-white max-w-4xl my-12 mx-auto rounded-2xl p-6 pb-20 shadow-lg flex flex-col justify-center items-center space-y-6">
      <div>
        <Image src={folder} alt="" />
      </div>
      <h1 className="text-2xl">There's no task here!</h1>
      <div className="flex space-x-1 items-center">
        <div>
          <span className="text-3xl text-blue-500">+</span>
        </div>
        <Link className="text-blue-500 mt-1 hover:underline" href="/add-task">
          Create new task
        </Link>
      </div>
    </main>
  );
};

export default InitialPage;

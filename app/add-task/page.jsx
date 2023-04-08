import { FaArrowLeft } from "react-icons/fa";

const AddTask = () => {
  return (
    <main className="bg-white max-w-4xl my-12 mx-auto rounded-2xl p-6 pb-20 shadow-lg  flex flex-col justify-center items-center space-y-6">
      <div className="flex justify-center items-center space-x-6 mb-6 static">
        <div className=" absolute left-72">
          <button>
            <FaArrowLeft />
          </button>
        </div>
        <h1 className="text-3xl font-sans">Create New Task</h1>
      </div>

      <div className="flex flex-col">
        <label>Title</label>
        <input
          type="text"
          className="border w-96 p-2 rounded-md bg-gray-100 mb-12 mt-2"
        />
        <label>Catagory</label>
        <input
          type="text"
          className="border w-96 p-2 rounded-md bg-gray-100 mb-12 mt-2"
        />
      </div>
      <div className=" space-x-8">
        <button className="bg-gray-100 py-3 px-16 rounded-2xl">Cancel</button>
        <button className="bg-blue-500 py-3 px-16 rounded-2xl text-white">
          Create
        </button>
      </div>
    </main>
  );
};

export default AddTask;

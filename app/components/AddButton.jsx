import Link from "next/link";

const AddButton = () => {
  return (
    <Link href="/add-task">
      <button className=" absolute bottom-4 right-4 text-white text-3xl pb-0.5 bg-blue-500 rounded-full w-12 h-12 font-mono flex justify-center items-center font-medium border-solid border-white border-2">
        +
      </button>
    </Link>
  );
};

export default AddButton;

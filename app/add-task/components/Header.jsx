import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-center items-center space-x-6 mb-6">
      <div className="absolute top-6 left-6">
        <Link href="/">
          <FaArrowLeft />
        </Link>
      </div>
      <h1 className="text-3xl font-sans">Create New Task</h1>
    </div>
  );
};

export default Header;

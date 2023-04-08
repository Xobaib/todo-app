import { TbTrash } from "react-icons/tb";

const Tasks = () => {
  return (
    <ul className="w-11/12">
      <li className="flex justify-between border-b pb-4 mb-6">
        <div className="flex">
          <input type="checkbox" className="w-12 rounded-full bg-blue-500" />
          <p>Get a new helmet</p>
        </div>

        <div className="flex items-center space-x-6 text-blue-500">
          <TbTrash size="1.5em" />
          <span className="font-bold">Uncategorized</span>
        </div>
      </li>
    </ul>
  );
};

export default Tasks;

const Categories = () => {
  return (
    <div className="w-1/5 border-r">
      <ul className="text-lg font-bold text-gray-600 flex flex-col space-y-3 pb-56 pt-20 ml-6">
        <li className="hover:text-blue-500">
          <a href="#"> All</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#">Groceries</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#">College</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#">Payments</a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;

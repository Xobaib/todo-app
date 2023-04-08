const Header = () => {
  return (
    <>
      <h1 className="text-3xl mt-6 mb-6">All Tasks</h1>
      <input
        type="text"
        className="w-11/12 p-2 mb-12 bg-slate-100 rounded-xl"
        placeholder="Search something..."
      />
    </>
  );
};

export default Header;

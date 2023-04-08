import Form from "./components/Form";
import Header from "./components/Header";

const AddTask = () => {
  return (
    <main className="bg-white max-w-4xl my-12 mx-auto rounded-2xl p-6 pb-20 shadow-lg  flex flex-col justify-center items-center space-y-6">
      <Header />
      <Form />
    </main>
  );
};

export default AddTask;

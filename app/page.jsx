import InitialPage from "./components/InitialPage";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddButton from "./components/AddButton";

export default function Home() {
  return (
    //The Page Content When No Task Added:
    <InitialPage />

    // The Page Content When Some Tasks Added:
    // <main className="bg-white max-w-4xl my-12 mx-auto rounded-2xl shadow-lg flex">
    //   <Categories />
    //   <div className="w-4/5 flex flex-col items-center px-6 relative">
    //     <Header />
    //     <Tasks />
    //     <AddButton />
    //   </div>
    // </main>
  );
}

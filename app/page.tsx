import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Primary/Story/Story";
import Post from "./components/Primary/Post/Post";
import Suggestions from "./components/Secondary/Suggestions";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full flex justify-center">
      <div className="container max-w-4xl flex-col justify-center">
        <Navbar />
        <div className="body mx-auto flex flex-row h-full">
          <div className="primary-section flex-col justify-center sm:basis-2/3 outline outline-1 outline-slate-200 rounded-md shadow-xl">
            <Story />
            <hr />
            <Post />
          </div>
          <div className="hidden sm:block secondary-section sm:basis-1/3">
            <Suggestions />
          </div>
        </div>
      </div>
    </main>
  );
}

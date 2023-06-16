import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Primary/Story/Story";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <Navbar />
      <Story />
    </main>
  );
}

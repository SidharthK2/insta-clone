import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  console.log("HI");
  return (
    <main className="flex-col min-h-screen min-w-full">
      <Navbar />
      <div>hi from home</div>
    </main>
  );
}

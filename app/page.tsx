import Navbar from "./components/Navbar";

export default function Home() {
  console.log("HI");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      hi from home
    </main>
  );
}

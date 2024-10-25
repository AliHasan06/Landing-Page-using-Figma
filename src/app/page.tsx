import Featured from "@/Components/Featured";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Recent from "@/Components/Recent";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Recent/>
      <Featured/>
      <Footer/>
    </div>
  );
}

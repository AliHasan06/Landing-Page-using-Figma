import Featured from "@/Components/FeaturedSection";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Recent from "@/Components/RecentSection";


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

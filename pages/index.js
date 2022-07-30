import Description from "../components/dashboard/Description";
import Hero from "../components/dashboard/Hero";
import NavBar from "../components/layout/NavBar";

export default function Home() {
  return (
    <div className='w-90 overflow-hidden'>
      <NavBar />
      <Hero />
      <Description />
    </div>
  );
}

import Description from "../components/dashboard/Description";
import Hero from "../components/dashboard/Hero";

export default function Home() {
  return (
    <div className='w-90 overflow-hidden'>
      <Hero />
      <Description />
    </div>
  );
}

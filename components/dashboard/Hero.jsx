import Image from "next/image";
import logogo from "../../public/HeroLogo.svg";

const Hero = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-[url(../public/project-management.png)] bg-contain bg-no-repeat bg-center bg-blend-multiply bg-gray-800'>
      <Image src={logogo} alt='logo' height={200} width={600} />
    </div>
  );
};

export default Hero;

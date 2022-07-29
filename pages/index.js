import styles from "../styles/Home.module.css";
import logogo from "../public/HeroLogo.svg";
import Image from "next/image";
import NavBar from "../components/layout/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.hero}>
        <Image src={logogo} alt='logo' height={400} width={600} />
      </div>
    </div>
  );
}

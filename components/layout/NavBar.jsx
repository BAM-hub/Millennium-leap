import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import logogo from "../../public/logogo.png";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Image src={logogo} alt='logo' width={150} height={75} />
      <div className={styles.links}>
        <div>Home</div>
        <div>Register</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default NavBar;

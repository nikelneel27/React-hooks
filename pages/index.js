import Head from "next/head";
import Image from "next/image";
import Cards from "../components/Cards";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Cards />
    </div>
  );
}

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Faucet | Moonbase</title>
        <meta
          name="description"
          content="Demo app part of a tutorial on adding RainbowKit to a React application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "4rem" }}>
          Request Testnet LINK
        </h1>

        <ConnectButton />
      </main>
    </div>
  );
}

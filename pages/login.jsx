import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { contractAddress } from "../const/yourDetails";


export default function Login() {
  const address = useAddress();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>NFTゲートウェイ Demo</h1>
      <p className={styles.explain}>
        これは名取NFTを保有しているユーザー限定のWebサイトです。
      </p>

      <hr className={styles.divider} />

      <>
        {address ? (
          <p>
            アドレス：{address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="#F213A4" />

        <p className={styles.explain}>
          <Link className={styles.purple} href="/">
            main pageへ行く
          </Link>
        </p>
      </>
    </div>
  );
}

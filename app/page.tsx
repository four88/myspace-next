import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("api/auth/signin");
  }
  return <main className={styles.main}></main>;
}

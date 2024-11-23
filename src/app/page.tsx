import Image from "next/image";
import { Footer } from "../componets/Footer";
import { Header } from "../componets/Header";
import { Content } from "../componets/Content";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-[#001c2a] flex flex-col items-center">
        <div className="flex flex-col w-[50%] items-center justify-items-center min-h-screen gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
          <h1>Hola</h1>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
    </div>
  );
}

import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Content } from "../components/Content";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-[#001c2a] flex flex-col items-center">
        <div className="flex flex-col w-[70%] items-center justify-items-center min-h-screen gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </div>
    </div>
  );
}

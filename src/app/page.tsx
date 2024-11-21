import Image from "next/image";
import { Footer } from "./componets/Footer";
import { Header } from "./componets/Header";
import { Content } from "./componets/Content";

export default function Home() {
  return (
    <div className=" flex flex-col items-center ">
      <div className="flex flex-col w-[70%] items-center justify-items-center min-h-screen gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
    </div>
  );
}

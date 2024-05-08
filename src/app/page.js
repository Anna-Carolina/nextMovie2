import { Banner } from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Banner titulo="Filmes & Séries" subtitulo="Lista de filmes e séries baseada na API The Movie DB. 
      Confira as produções mais populares do mundo." tipo="home"/>

      <div className="flex max-[850px] flex-col items-center gap-y-5 my-12 lg:flex-row lg:justify-center lg:gap-x-12">
        
        <Link href={"/filmes"} className="hover:-translate-y-1.5 transition">
          <Image src="/assets/card-filmes.png" width={400} height={200} quality={75} alt="filme"/>
        </Link>
        <Link href={"/series"} className="hover:-translate-y-1.5 transition">
          <Image src="/assets/card-series.png" width={400} height={200} quality={75} alt="serie"/>
        </Link>
        
      </div>
    </>
    
  );
}

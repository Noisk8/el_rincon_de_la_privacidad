'use client'
import Image from "next/image";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <Hero />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
       <Stats episodes={14} views={1000} guests={8} />
       
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
     
   
      </footer>
    </div>
  );
}

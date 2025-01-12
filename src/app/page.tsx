"use client";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import LatestEpisodes from "../components/home/LatestEpisodes";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Componente Hero */}
        <Hero />
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Componente Ultimos Episodios */}
          <LatestEpisodes playlistId="PLoc3wV2YJYwrG7l-Qul_zKibhpmdRSMk-" />
         

          {/* Componente Stats*/}
          <Stats episodes={14} views={1000} guests={8} poaps={430} />
        </div>
      </main>
    </div>
  );
}

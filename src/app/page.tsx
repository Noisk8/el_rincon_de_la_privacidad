"use client";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import LatestEpisodes from "../components/home/LatestEpisodes";
import NymVpn from "../components/home/NymVpn";
import ClaimPoap from "@/components/ClaimPoap";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Componente Hero */}
        <Hero />
        <div className="flex flex-col gap-8 items-center w-full m-8">
          {/* Componente Ultimos Episodios */}
          <LatestEpisodes playlistId="PLoc3wV2YJYwrG7l-Qul_zKibhpmdRSMk-" />

          <ClaimPoap />
          {/* Componente Stats */}
          <Stats episodes={14} views={1000} guests={8} poaps={430} />

        <NymVpn />

        </div>
      </main>
    </div>
  );
}
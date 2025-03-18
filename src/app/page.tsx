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
          <LatestEpisodes playlistId="PL64IteNHDJayiXgZUl43bsBodEBILX6iJ" />

          <ClaimPoap />
          {/* Componente Stats */}
          <Stats episodes={17} views={1300} guests={14} poaps={206} />

          <NymVpn />
        </div>
      </main>
    </div>
  );
}

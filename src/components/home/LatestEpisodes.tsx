"use client";

import * as React from "react";

interface LatestEpisodesProps {
  playlistId: string;
}

const LatestEpisodes = ({ playlistId }: LatestEpisodesProps) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <div className="bg-background-default p-8">
      <h1 className="text-green-400 mb-4 text-4xl font-bold text-center pt-8">
        Últimos Episodios
      </h1>
      <div className="bg-card-background p-4 rounded-lg shadow-md flex justify-center">
        <div className="w-full max-w-2xl flex flex-col">
          <div className="overflow-hidden">
            <iframe
              width="100%"
              height="400"
              src={youtubeEmbedUrl}
              title="YouTube Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <p className="text-center text-xl md:text-2xl">
              En esta lista de reproducción encontrarás los últimos episodios de El
              Rincón de la Privacidad.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
              Ver en Youtube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEpisodes;

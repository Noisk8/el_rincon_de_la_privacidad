'use client'

import YouTube from 'react-youtube';

interface LatestEpisodesProps {
    playlistId: string;
}

const LatestEpisodes = ({ playlistId }: LatestEpisodesProps) => {
    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            listType: 'playlist',
            list: playlistId,
            autoplay: 0,
        },
    };

    return (
        <div className="bg-background-default p-4 ">
            <h1 className="text-green-400 mb-4 text-6xl font-bold text-center pt-8">Últimos Episodios</h1>
            <div className="bg-card-background p-4 rounded-lg shadow-md">
                <YouTube opts={videoOptions} />
            </div>
        </div>
    );
};

export default LatestEpisodes;

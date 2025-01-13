"use client";

import YouTube from "react-youtube";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface LatestEpisodesProps {
  playlistId: string;
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2">
        En esta lista de reproducción encontrarás los últimos episodios de El
        Rincón de la Privacidad.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ver En Youtube</Button>
    </CardActions>
  </React.Fragment>
);

const LatestEpisodes = ({ playlistId }: LatestEpisodesProps) => {
  const videoOptions = {
    playerVars: {
      listType: "playlist",
      list: playlistId,
      autoplay: 0,
    },
  };

  return (
    <div className="bg-background-default p-4 ">
      <h1 className="text-green-400 mb-4 text-4xl font-bold text-center pt-8">
        Últimos Episodios
      </h1>
      <div className="bg-card-background p-4 rounded-lg shadow-md">
        <Card variant="outlined">
          <YouTube opts={videoOptions} />

          {card}
        </Card>
      </div>
    </div>
  );
};

export default LatestEpisodes;

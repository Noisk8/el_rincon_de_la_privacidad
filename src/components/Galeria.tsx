"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  Box,
  Chip,
  Pagination,
} from "@mui/material";
import { PlayCircle, XCircle, Share } from "lucide-react";

interface PodcastEpisode {
  id: string;
  title: string;
  youtubeUrl: string;
  duration: string;
  description: string;
  publishedAt: string;
  tags: string[];
}

interface PodcastGalleryProps {
  episodes?: PodcastEpisode[];
  episodesPerPage?: number;
}

const Gallery = ({
  episodes = [],
  episodesPerPage = 6,
}: PodcastGalleryProps) => {
  const [page, setPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getYoutubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getYoutubeThumbnail = (url: string) => {
    const videoId = getYoutubeId(url);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "/api/placeholder/400/320";
  };

  if (!episodes || episodes.length === 0) {
    return (
      <Box className="p-8 text-center">
        <Typography color="text.secondary">
          No hay episodios disponibles por el momento.
        </Typography>
      </Box>
    );
  }

  const totalPages = Math.ceil(episodes.length / episodesPerPage);
  const validPage = Math.min(Math.max(1, page), totalPages);

  const currentEpisodes = episodes.slice(
    (validPage - 1) * episodesPerPage,
    validPage * episodesPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {// {{edit_1}}} 
      return dateString;
    }
  };

  return (
    <Box className="p-4">
      <Grid container spacing={4}>
        {currentEpisodes.map((episode) => (
          <Grid item xs={12} sm={6} md={4} key={episode.id}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
              <Box className="relative">
                <CardMedia
                  component="img"
                  image={getYoutubeThumbnail(episode.youtubeUrl)}
                  alt={episode.title}
                  className="h-48 object-cover"
                />
                <IconButton
                  onClick={() => setActiveVideo(episode.youtubeUrl)}
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
                >
                  <PlayCircle className="h-12 w-12 text-green-500" />
                </IconButton>
              </Box>

              <CardContent className="flex-grow flex flex-col">
                <Typography
                  variant="h4"
                  className="font-bold mb-2 line-clamp-2"
                >
                  {episode.title}
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  className="mb-3 line-clamp-3"
                >
                  {episode.description}
                </Typography>

                <Box className="flex flex-wrap gap-2 mb-3">
                  {episode.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      className="bg-gray-900 text-green-500"
                    />
                  ))}
                </Box>

                <Box className="mt-auto flex items-center justify-between text-sm text-gray-500">
                  <Typography
                    variant="body1"
                    className="flex items-center gap-1"
                  >
                    <span>{episode.duration}</span>
                  </Typography>

                  <Typography variant="body1">
                    {formatDate(episode.publishedAt)}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() => {
                      navigator.clipboard.writeText(episode.youtubeUrl);
                      alert("URL copiada al portapapeles");
                    }}
                  >
                    <Share className="h-4 w-4" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box className="mt-8 flex justify-center">
          <Pagination
            count={totalPages}
            page={validPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}

      <Dialog
        open={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent className="p-0">
          <Box className="relative pt-[56.25%]">
            <IconButton
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white"
            >
              <XCircle />
            </IconButton>
            {activeVideo && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  activeVideo
                )}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery;

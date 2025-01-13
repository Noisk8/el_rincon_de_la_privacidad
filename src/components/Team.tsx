import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface TeamMember {
  avatar: string;
  title: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    avatar: "/TEKEL.jpg",
    title: "Teckel",
    description: "Entrevistadora",
  },
  {
    avatar: "/Noisk8.jpg",
    title: "Noisk8",
    description: "Hoster",
  },
  {
    avatar: "/Erika.png",
    title: "Erika",
    description: "Capsula Legal",
  },
  {
    avatar: "/Diana.jpg",
    title: "Diana",
    description: "Capsula Cyberpunk",
  },
  {
    avatar: "/Chio.jpg",
    title: "Chio",
    description: "BackStage",
  },
  {
    avatar: "/Gelois.jpg",
    title: "Gelois",
    description: "Noticias",
  },
];

const Team = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Equipo</h1>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {teamMembers.map((member, index) => (
          <Box key={index} width={{ xs: "100%", sm: "50%", md: "33.333%" }}>
            <Card className="shadow-md rounded-3xl">
              <CardMedia
                component="img"
                height="100"
                image={member.avatar}
                alt={member.title}
                className="object-cover"
              />
              <CardContent className="p-4">
                <Typography
                  variant="h5"
                  component="h2"
                  className="font-semibold mb-2"
                >
                  {member.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Team;

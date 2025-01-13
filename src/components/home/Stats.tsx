"use client";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";
import CountUp from "react-countup";
import MovieIcon from "@mui/icons-material/Movie";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // Importa el nuevo icono

interface ImpactMetricsProps {
  episodes: number;
  views: number;
  guests: number;
  poaps: number;
}

const Stats = ({ episodes, views, guests, poaps }: ImpactMetricsProps) => {
  const theme = useTheme();

  const metrics = [
    {
      icon: <MovieIcon sx={{ fontSize: 60, color: "#14e76f" }} />,
      value: episodes,
      label: "Episodios",
      suffix: "",
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 60, color: "#14e76f" }} />,
      value: views,
      label: "Visualizaciones",
      suffix: "K",
    },
    {
      icon: <PersonIcon sx={{ fontSize: 60, color: "#14e76f" }} />,
      value: guests,
      label: "Invitados",
      suffix: "",
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 60, color: "#14e76f" }} />, // Usa el nuevo icono
      value: poaps,
      label: "Poaps Repartidos",
      suffix: "",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        pt: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <h1 className=" font-bold text-center text-4xl text-green-400">
        {" "}
        Impacto de programa
      </h1>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={6}
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 2, sm: 4 },
        }}
      >
        {metrics.map((metric, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: "1", sm: "0 1 300px" },
              minWidth: { xs: "100%", sm: "250px" },
            }}
          >
            <Card
              sx={{
                height: "100%",
                background: "#222b2d",
                boxShadow: 3,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 4,
                }}
              >
                {metric.icon}
                <Typography
                  variant="h2"
                  sx={{
                    color: "#17c865",
                    mt: 2,
                    fontWeight: "bold",
                  }}
                >
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    separator=","
                    suffix={metric.suffix}
                  />
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#14e76f",
                    mt: 2,
                  }}
                >
                  {metric.label}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Stats;

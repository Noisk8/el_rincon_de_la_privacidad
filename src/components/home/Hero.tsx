"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        backgroundColor: "#222b2d", // Negro
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
        >
          <Box flex={1} mb={{ xs: 4, md: 0 }}>
            <Typography
              component="h1"
              variant="h2"
              color="#14e76f" // Verde 1
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              El Rincón de la Privacidad
            </Typography>
            <Typography
              variant="h5"
              color="#17c865"
              paragraph
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Un espacio para hablar sobre privacidad en español, generado con
              el trabajo mutuo de los squads Build With NYM y Daoariwas.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#14e76f", color: "#222b2d" }} // Verde 1, Negro
                component={Link}
                href="/episodes"
                size="large"
              >
                Ver Episodios
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: "#14b254", color: "#14b254" }} // Verde 2
                component={Link}
                href="/about"
                size="large"
              >
                Saber más
              </Button>
            </Stack>

            {/* Logos */}
            <Box
              sx={{
                mt: 6,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 4,
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="#17c865">
                {" "}
                {/* Verde 3 */}
                En colaboración con:
              </Typography>
              <Box sx={{ height: 40, width: 120 }}>
                <Image
                  src="https://www.daoariwas.xyz/images/DAo_color.png"
                  alt="Logo Build With Nym"
                  width={120}
                  height={40}
                />
              </Box>
              <Box sx={{ height: 40, width: 120, bgcolor: "#14b254" }}>
                Logo Build With Nym
              </Box>
            </Box>
          </Box>
          <Box flex={1} display="flex" justifyContent="center">
            <Image
              src="/rincon.webp"
              alt="Hero"
              width={500}
              height={500}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

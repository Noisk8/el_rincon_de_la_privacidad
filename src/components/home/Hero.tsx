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
export default function Hero() {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        backgroundColor: "#222b2d",
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          paddingBottom={8}
          sx={{
            width: "100%",
          }}
        >
          {/* Contenedor principal que cambiará el orden en móvil */}
          <Box
            flex={1}
            mb={{ xs: 4, md: 0 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              order: { xs: 1, md: 1 },
            }}
          >
            {/* Título */}
            <Typography
              component="h1"
              variant="h2"
              color="#14e76f"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                order: { xs: 1, md: 1 },
              }}
            >
              El Rincón de la Privacidad
            </Typography>

            {/* Imagen en móvil */}
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              sx={{
                order: { xs: 2, md: 5 },
                display: { xs: "flex", md: "none" },
                my: { xs: 3, md: 0 },
              }}
            >
              <Image
                src="/ER.png"
                alt="Hero"
                width={500}
                height={500}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>

            {/* Descripción */}
            <Typography
              variant="h5"
              color="#17c865"
              paragraph
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                order: { xs: 3, md: 2 },
              }}
            >
              Un espacio para hablar sobre privacidad en español, generado con
              el trabajo mutuo de los squads Build With NYM y Daoariwas.
            </Typography>

            {/* Botones */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4, order: { xs: 4, md: 3 } }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/episodios"
              >
                Ver episodios
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="https://www.daoariwas.xyz/"
              >
                Sobre Nym
              </Button>

              {/* ... botones existentes ... */}
            </Stack>

            {/* Logos */}

            <Box
              sx={{
                mt: 6,
                display: "flex",
                flexDirection: { xs: "column", sm: "row", flexWrap: "wrap" },
                gap: 4,
                alignItems: { xs: "center", sm: "center" },
                order: { xs: 5, md: 4 },
              }}
            >
              <Typography
                variant="h5"
                color="#17c865"
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                En colaboración de:
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                width="100%"
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  "@media (min-width:500px)": {
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                  },
                }}
              >
                <Box sx={{ height: 40, width: 120 }}>
                  <Image
                    src="https://www.daoariwas.xyz/images/DAo_color.png"
                    alt="Logo Build With Nym"
                    width={120}
                    height={40}
                  />
                </Box>
                <Box sx={{ height: 40, width: 120 }}>
                  <Image
                    src="/BWNym_logo2.png"
                    alt="Logo Build With Nym"
                    width={120}
                    height={40}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* Imagen en desktop */}
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              src="/ER2.png"
              alt="Hero"
              width={800}
              height={500}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

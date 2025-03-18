"use client";

import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

const footerSections = [
  {
    title: "Comunidad",
    links: [
      { name: "Calendario", href: "/calendar" },
      { name: "POAPs", href: "/poaps" },
      { name: "Eventos", href: "/calendar" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "Build With NYM", href: "https://nymtech.net" },
      { name: "Daoariwas", href: "https://www.daoariwas.xyz/" },
      { name: "NYM VPN", href: "https://nymtech.net/vpn" },
    ],
  },
];

const socialLinks = [
  {
    icon: <TwitterIcon />,
    href: "https://x.com/espanolnym?lang=es",
    name: "Twitter",
  },
  { icon: <TelegramIcon />, href: "#", name: "Telegram" },
  { icon: <GitHubIcon />, href: "#", name: "GitHub" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#14e76f",
        py: 6,
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={4}
        >
          {/* Logo y descripción */}
          <Box flexBasis={{ xs: "100%", md: "30%" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#222b2d",
                fontWeight: 700,
                mb: 2,
              }}
            >
              El Rincón de la Privacidad
            </Typography>
            <Typography variant="body2" color="#222b2d" sx={{ mb: 3 }}>
              Un espacio para hablar sobre privacidad en español, creado por la
              comunidad para la comunidad.
            </Typography>
            {/* Social Links */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#222b2d",
                    "&:hover": {
                      color: "custom.primary",
                    },
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Enlaces de navegación */}
          {footerSections.map((section) => (
            <Box
              flexBasis={{ xs: "100%", sm: "45%", md: "15%" }}
              key={section.title}
            >
              <Typography
                variant="subtitle1"
                color="#222b2d"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#222b2d",
                        "&:hover": {
                          color: "custom.primary",
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Copyright */}
        <Typography variant="h5" color="#222b2d" align="center" sx={{ mt: 8 }}>
          {"© "}
          {new Date().getFullYear()}
          {" El Rincón de la Privacidad. "}
        </Typography>
      </Container>
    </Box>
  );
}

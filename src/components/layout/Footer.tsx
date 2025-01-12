'use client'

import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink, 
  IconButton,
  Stack,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

const footerSections = [

  {
    title: 'Comunidad',
    links: [
      { name: 'Calendario', href: '/calendar' },
      { name: 'POAPs', href: '/poaps' },
      { name: 'Eventos', href: '/calendar' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Build With NYM', href: 'https://nymtech.net' },
      { name: 'Daoariwas', href: '#' },
      { name: 'NYM VPN', href: 'https://nymtech.net/vpn' },
    ],
  },
];

const socialLinks = [
  { icon: <TwitterIcon />, href: '#', name: 'Twitter' },
  { icon: <TelegramIcon />, href: '#', name: 'Telegram' },
  { icon: <GitHubIcon />, href: '#', name: 'GitHub' },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#14e76f',
        py: 6,
        borderTop: 1,
        borderColor: 'divider',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo y descripción */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'custom.primary',
                fontWeight: 700,
                mb: 2
              }}
            >
              El Rincón de la Privacidad
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Un espacio para hablar sobre privacidad en español, creado por la comunidad 
              para la comunidad.
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
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'custom.primary',
                    },
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Enlaces de navegación */}
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography
                variant="subtitle1"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'custom.primary',
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 8 }}
        >
          {'© '}
          {new Date().getFullYear()}
          {' El Rincón de la Privacidad. Todos los derechos reservados.'}
        </Typography>
      </Container>
    </Box>
  );
}

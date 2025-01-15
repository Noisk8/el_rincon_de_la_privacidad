'use client'
import React, { useState } from "react";
import { Avatar, Typography, Card, CardContent, Box, Modal } from "@mui/material";
import Image from "next/image";

interface Poap {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

const poaps: Poap[] = [
  {
    imageUrl: "/Poap1.png",
    title: "Poap 1",
    description: "📢 El rincón de la Privacidad - Axelar Network Español",
    url: "https://example.com/poap1",
  },
  {
    imageUrl: "/Poap2.png",
    title: "Poap 2",
    description: "📢 Episodio 2! El rincón de la Privacidad - Llamada comunitaria en español",
    url: "https://example.com/poap2",
  },
  {
    imageUrl: "/Poap3.png",
    title: "Poap 3",
    description: "📢 Episodio 3!: El rincón de la Privacidad - Conoce a Daniel",
    url: "https://example.com/poap3",
  },
  {
    imageUrl: "/Poap4.png",
    title: "Poap 4",
    description: "📢 ¡Episodio 4!: El rincón de la Privacidad - Invitado: Erik Valle ",
    url: "https://poap.gallery/drops/177010",
  },
  {
    imageUrl: "/Poap5.png",
    title: "Poap 5",
    description: "📢 Episodio 5 El rincón de la Privacidad con MiCryptoMundo",
    url: "https://poap.gallery/drops/177478",
  },
  {
    imageUrl: "/Poap6.png",
    title: "Poap 6",
    description: "📢 ¡Episodio 6!: El rincón de la Privacidad - Invitado: Yoditar",
    url: "https://poap.gallery/drops/177956",
  },
  {
    imageUrl: "/Poap7.png",
    title: "Poap 7",
    description: "📢 ¡Episodio 7!: El rincón de la Privacidad - Invitada: @lucilajuliana",
    url: "https://poap.gallery/drops/178401",
  },
  {
    imageUrl: "/Poap8.png",
    title: "Poap 8",
    description: "📢 ¡Episodio 8!: El rincón de la Privacidad - Invitado: Daniel",
    url: "https://poap.gallery/drops/178849",
  },
  {
    imageUrl: "/Poap9.png",
    title: "Poap 9",
    description: "📢 ¡Episodio 9!: El Rincón de la Privacidad - Invitado: Fernando Illescas",
    url: "https://poap.gallery/drops/179311",
  },
  {
    imageUrl: "/Poap10.png",
    title: "Poap 10",
    description: "📢 ¡Episodio 10!: El rincón de la Privacidad - Episodio especial",
    url: "https://poap.gallery/drops/179853",
  },
  {
    imageUrl: "/Poap11.jpeg",
    title: "Poap 11",
    description: "📢 ¡Episodio 11!: El rincón de la Privacidad - Actualización Magura",
    url: "https://poap.gallery/drops/182158",
  },
  {
    imageUrl: "/Poap12.jpeg",
    title: "Poap 12",
    description: "📢 ¡Episodio 12!: El rincón de la Privacidad - Invitada: Erika Peralta M.",
    url: "https://poap.gallery/drops/182607",
  },
  {
    imageUrl: "/Poap13.jpeg",
    title: "Poap 13",
    description: "📢 ¡Episodio 13!: El rincón de la Privacidad - Invitada: Diana Maldonado Lasso.",
    url: "https://poap.gallery/drops/183037",
  },
  {
    imageUrl: "/Poap14.jpeg",
    title: "Poap 14",
    description: "📢 ¡Episodio 14!: El rincón de la Privacidad - Invitada: NymVPN.",
    url: "https://poap.gallery/drops/183424",
  },


  // Agrega más POAPs aquí
];

const Poaps: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="text-green-400 font-bold text-4xl pt-8 pb-8 text-center">
        Colección de poaps
      </h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          p: 2,
        }}
      >
        {poaps.map((poap, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "48%", md: "30%", lg: "23%" },
              maxWidth: 400,
              margin: "auto",
              cursor: "pointer",
            }}
          >
            <Card
              sx={{
                borderRadius: "20%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                boxShadow: "0 4px 8px rgba(0, 255, 0, 0.2)",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 10px rgba(0, 255, 0, 0.6)",
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                <a onClick={() => handleOpen(poap.imageUrl)} aria-label={`Ver imagen de ${poap.title}`}>
                  <Avatar
                    alt={poap.title}
                    src={poap.imageUrl}
                    sx={{ width: 200, height: 200, borderRadius: "50%" }}
                  />
                </a>
              </Box>
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {poap.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {poap.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <a href={poap.url} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
                      Ver POAP
                    </button>
                  </a>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <button
            onClick={handleClose}
            aria-label="Cerrar modal"
            className="fixed top-5 right-5 text-white text-4xl cursor-pointer"
          >
            &times;
          </button>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              width={600}
              height={600}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Poaps;

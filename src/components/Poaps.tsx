import React from 'react';
import { Avatar, Typography, Card, CardContent, Box } from '@mui/material';


interface Poap {
  imageUrl: string;
  title: string;
  description: string;
}

const poaps: Poap[] = [
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 1',
    description: 'Un gatito muy tierno.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 2',
    description: 'Otro gatito adorable.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 3',
    description: 'Un gatito juguetón.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 4',
    description: 'Un gatito dormilón.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 5',
    description: 'Un gatito muy tierno.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 6',
    description: 'Otro gatito adorable.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 7',
    description: 'Un gatito juguetón.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 8',
    description: 'Un gatito dormilón.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 9',
    description: 'Un gatito muy tierno.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 10',
    description: 'Otro gatito adorable.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 11',
    description: 'Un gatito juguetón.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 12',
    description: 'Un gatito dormilón.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 13',
    description: 'Un gatito muy tierno.',
  },
  {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 14',
    description: 'Otro gatito adorable.',
  },
    {
    imageUrl: '/BWNym_logo.png',
    title: 'Gatito 15',
    description: 'Proximamente...',
  },

  // Agrega más POAPs aquí
];

const Poaps: React.FC = () => {
  return (
    <div>
      <h1 className='text-green-400 font-bold text-4xl pt-8 pb-8 text-center'>Colección de poaps</h1>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, p: 2 }}>
        {poaps.map((poap, index) => (
          <Box key={index} sx={{ width: { xs: '100%', sm: '48%', md: '30%', lg: '23%' }, maxWidth: 400, margin: 'auto' }}>
            <Card 
              sx={{ 
                borderRadius: '20%',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                boxShadow: '0 4px 8px rgba(0, 255, 0, 0.2)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 10px rgba(0, 255, 0, 0.6)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Avatar
                  alt={poap.title}
                  src={poap.imageUrl}
                  sx={{ width: 200, height: 200, borderRadius: '50%' }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {poap.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {poap.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Poaps;
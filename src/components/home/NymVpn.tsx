'use client'
import { Box, Card, CardContent, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

const NymVpn = () => {
    const theme = useTheme();

    return (
        <Box sx={{ textAlign: 'center', pt: 8, backgroundColor: theme.palette.background.default }}>
            <Card 
                sx={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: '#222b2d',
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'translateY(-5px)'
                    }
                }}
            >
                <CardContent sx={{ padding: 4 }}>
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            color: '#17c865',
                            fontWeight: 'bold',
                            mb: 4
                        }}
                    >
                        Promociona el uso de Nym VPN
                    </Typography>
                    <Image 
                        src="https://strapi-www-nym-com.sos-ch-dk-2.exo.io/Hero_VPN_4abc9500fd.svg" 
                        alt="Nym VPN" 
                        width={600} 
                        height={300} 
                        className="rounded-lg"
                    />
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#14e76f',
                            mt: 4,
                            mb: 4
                        }}
                    >
                        Nym VPN es una solución avanzada para proteger tu privacidad en línea. ¡Descárgala ahora y navega de forma segura!
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href="https://nymtech.net" 
                            target="_blank"
                            sx={{ backgroundColor: '#17c865', '&:hover': { backgroundColor: '#14e76f' } }}
                        >
                            Visita la Web
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            href="https://nymtech.net/download" 
                            target="_blank"
                            sx={{ backgroundColor: '#17c865', '&:hover': { backgroundColor: '#14e76f' } }}
                        >
                            Descargar
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default NymVpn;
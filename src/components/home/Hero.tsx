'use client'

import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Paper,
    Stack
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
    return (
        <Paper 
            elevation={0}
            sx={{
                position: 'relative',
                backgroundColor: '#222b2d', // Negro
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Typography
                            component="h1"
                            variant="h2"
                            color="#14e76f" // Verde 1
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            El Rincón de la Privacidad
                        </Typography>
                        <Typography variant="h5" color="#17c865" paragraph> {/* Verde 3 */}
                            Un espacio para hablar sobre privacidad en español, generado con el trabajo 
                            mutuo de los squads Build With NYM y Daoariwas.
                        </Typography>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            sx={{ mt: 4 }}
                        >
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#14e76f', color: '#222b2d' }} // Verde 1, Negro
                                component={Link}
                                href="/episodes"
                                size="large"
                            >
                                Ver Episodios
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ borderColor: '#14b254', color: '#14b254' }} // Verde 2
                                component={Link}
                                href="/about"
                                size="large"
                            >
                                Saber más
                            </Button>
                        </Stack>

                        {/* Logos */}
                        <Box sx={{ mt: 6, display: 'flex', gap: 4, alignItems: 'center' }}>
                            <Typography variant="subtitle1" color="#17c865"> {/* Verde 3 */}
                                En colaboración con:
                            </Typography>
                            {/* Aquí irían los logos */}
                            <Box sx={{ height: 40, width: 120,  }}> {/* Verde 2 */}
                               <Image src="https://www.daoariwas.xyz/images/DAo_color.png" alt="Logo Build With Nym" width={120} height={40} />
                            </Box>
                            <Box sx={{ height: 40, width: 120, bgcolor: '#14b254' }}> {/* Verde 2 */}
                                Logo Build With Nym
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Image src="/rincon.webp" alt="Hero" width={500} height={500} />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}
'use client'
import { Box, Card, CardContent, Typography, useTheme, Stack } from '@mui/material';
import CountUp from 'react-countup';
import MovieIcon from '@mui/icons-material/Movie';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';

interface ImpactMetricsProps {
    episodes: number;
    views: number;
    guests: number; // Add guests to the props
}

const Stats = ({ episodes, views, guests }: ImpactMetricsProps) => {
    const theme = useTheme();

    const metrics = [
        {
            icon: <MovieIcon sx={{ fontSize: 60, color: '#14e76f' }} />,
            value: episodes,
            label: 'Episodios',
            suffix: ''
        },
        {
            icon: <VisibilityIcon sx={{ fontSize: 60, color: '#14b254' }} />,
            value: views,
            label: 'Visualizaciones',
            suffix: 'K'
        },
        {
            icon: <PersonIcon sx={{ fontSize: 60, color: '#14a1e6' }} />,
            value: guests,
            label: 'Invitados',
            suffix: ''
        }
    ];

    return (
        <Box sx={{ textAlign: 'center', pt: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ color: '#14e76f', fontWeight: 'bold' }}>
                Impacto en episodios
            </Typography>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={6} 
                sx={{ 
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { xs: 2, sm: 4 }
                }}
            >
                {metrics.map((metric, index) => (
                    <Box 
                        key={index} 
                        sx={{ 
                            flex: { xs: '1', sm: '0 1 300px' },
                            minWidth: { xs: '100%', sm: '250px' }
                        }}
                    >
                        <Card 
                            sx={{
                                height: '100%',
                                background: '#222b2d',
                                boxShadow: 3,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}
                        >
                            <CardContent sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 4
                            }}>
                                {metric.icon}
                                <Typography 
                                    variant="h2" 
                                    sx={{ 
                                        color: '#17c865',
                                        mt: 2,
                                        fontWeight: 'bold'
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
                                        color: '#14e76f',
                                        mt: 1
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
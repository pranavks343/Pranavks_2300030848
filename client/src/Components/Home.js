import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Container,
  CardContent,
  CardActions,
  Divider,
  Chip,
  Stack
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ShieldIcon from '@mui/icons-material/Shield';

const NewHome = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc', color: '#1e293b' }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 15,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
          }
        }}
      >
        <Container maxWidth="md">
          <Chip 
            label="NEW" 
            color="secondary" 
            size="small" 
            sx={{ mb: 2, color: 'white', fontWeight: 'bold' }} 
          />
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 3 }}>
            Elevate Your Experience with <Box component="span" sx={{ color: '#fef08a' }}>SwiftHome</Box>
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 300, mb: 4 }}>
            Premium services delivered with speed, care, and precision right to your home
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#fef08a',
                color: '#1e293b',
                '&:hover': { bgcolor: '#fde047' },
                fontWeight: 'bold',
                px: 4,
                py: 1.5
              }}
              component={RouterLink}
              to="/services"
              startIcon={<RocketLaunchIcon />}
            >
              Discover Services
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                px: 4,
                py: 1.5
              }}
              component={RouterLink}
              to="/about"
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 12, position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
            WHY CHOOSE US
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1 }}>
            Unmatched Service Excellence
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 5 }}>
                <Box sx={{
                  bgcolor: '#e0f2fe',
                  color: '#0369a1',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  <LocalShippingIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Lightning Fast Delivery
                </Typography>
                <Typography color="text.secondary">
                  Our hyper-efficient delivery network ensures your order arrives in record time, often within hours.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: 'center', py: 2 }}>
                <Button 
                  size="small" 
                  color="primary"
                  endIcon={<StarBorderPurple500Icon />}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 5 }}>
                <Box sx={{
                  bgcolor: '#dcfce7',
                  color: '#15803d',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  <PriceCheckIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Price Match Guarantee
                </Typography>
                <Typography color="text.secondary">
                  Found a better price elsewhere? We'll match it plus give you 5% off the difference.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: 'center', py: 2 }}>
                <Button 
                  size="small" 
                  color="success"
                  endIcon={<StarBorderPurple500Icon />}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 5 }}>
                <Box sx={{
                  bgcolor: '#fae8ff',
                  color: '#a21caf',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  <HeadsetMicIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Premium Support
                </Typography>
                <Typography color="text.secondary">
                  Dedicated concierge service with real humans available 24/7 to handle any request or concern.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: 'center', py: 2 }}>
                <Button 
                  size="small" 
                  color="secondary"
                  endIcon={<StarBorderPurple500Icon />}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Value Proposition */}
      <Box sx={{ bgcolor: '#f1f5f9', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
                More Than Just Delivery
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                We're redefining convenience with white-glove service standards and innovative solutions tailored to modern lifestyles.
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ShieldIcon color="primary" sx={{ mr: 2 }} />
                  <Typography>100% satisfaction guarantee</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ShieldIcon color="primary" sx={{ mr: 2 }} />
                  <Typography>Eco-friendly packaging options</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ShieldIcon color="primary" sx={{ mr: 2 }} />
                  <Typography>VIP membership benefits</Typography>
                </Box>
              </Stack>
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 4, px: 5, py: 1.5, fontWeight: 'bold' }}
                component={RouterLink}
                to="/membership"
              >
                Explore Benefits
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                bgcolor: 'white',
                borderRadius: 2,
                p: 3,
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: -16,
                  left: -16,
                  right: 16,
                  bottom: 16,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  zIndex: -1
                }
              }}>
                <Box sx={{
                  width: '100%',
                  height: 300,
                  bgcolor: '#e2e8f0',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b'
                }}>
                  <Typography>Service Showcase</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ 
        textAlign: 'center', 
        py: 10,
        background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
        color: 'white'
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            Ready to Experience the Future of Home Services?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, fontWeight: 300 }}>
            Join thousands of satisfied customers enjoying premium convenience.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)'
              }
            }}
            component={RouterLink}
            to="/register"
            endIcon={<RocketLaunchIcon />}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default NewHome;

import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import developerAnimation from '../assets/developer-animation.json'; // Adjust path if needed

const Home = () => (
  <Container disableGutters maxWidth={false}>
    <Box className="hero-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography className="hero-title">
          Welcome to FlowLeave,
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
        <Typography className="hero-subtitle">
          A clean, minimal leave management system, manage leaves effortlessly and stay organized—whether on desktop or mobile.
        </Typography>
        <Box component="ul" sx={{ listStyleType: 'disc', paddingLeft: 4, color: '#bbb', lineHeight: 1.8 }}>
          <li>Register users at ease</li>
          <li>View users</li>
          <li>Request leave</li>
          <li>Leave Request records</li>
        </Box>
      </motion.div>
    </Box>

    <Box className="animation-wrapper" sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
      <Lottie animationData={developerAnimation} loop autoplay style={{ width: 300, height: 300 }} />
    </Box>
  </Container>
);

export default Home;

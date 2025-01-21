import React, { useMemo } from 'react';
import { Box, Typography, Grid, Card, Grid2, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TypeWriteAnimatedText from '../misc/TypewriteAnimatedText';

const portfolio_content = {
    aboutMe: {
        title: 'About Me',
        description: "Hi there! I’m a passionate developer who enjoys exploring new technologies and solving problems creatively. I love working on challenging projects, whether it’s building applications, crafting algorithms, or designing user interfaces.",
    },
    hobbiesAndInterests: {
        title: 'My Hobbies and Interests',
        items: [
            {
                orientation: 'right',
                header: 'Operating Systems',
                caption: 'Installing and using Windows and various Linux distros (particularly Arch), primarily for coding and everyday use.',
                img1: 'assets/win11install.png',
                img2: 'assets/btw-i-use-arch.png',
            },
            {
                orientation: 'left',
                header: 'Retro Gaming',
                caption: 'Playing and trying out games from the past, primarily using console emulators.',
                img1: 'assets/ULUS10041_00000.jpg',
                img2: 'assets/nfsu2ss.png',
            },
            {
                orientation: 'right',
                header: 'Computer Programming',
                caption: 'Coding in general, learning and using different programming languages such as Rust, and C; learning to build amazing software both for mobile and the web.',
                img1: 'assets/bd78ac96a500b0ca7896efe876e85.png',
                img2: 'assets/462568696_8384262075016921_1975713479486836441_n.jpg',
            },
        ],
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.7
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6
        },
    },
};

const containerVariants = {
    hidden: { 
        opacity: 0, 
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            duration: 0.7,
        },
    },
};

const AboutMe = () => {
    const { aboutMe, hobbiesAndInterests } = portfolio_content;

    return(
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            <Box
                sx={{
                    padding: 4,
                    backgroundColor: (theme) => theme.palette.background.default,
                    color: (theme) => theme.palette.text.primary,
                }}
            >
                <Typography variant="h2"  gutterBottom align="center" sx={{ marginBottom: 3 }}>
                    {aboutMe.title}
                </Typography>
                <Typography variant="body1" align="center" sx={{ marginBottom: 5, mx: 10 }}>
                    <TypeWriteAnimatedText
                        text={aboutMe.description}
                        delay='20'
                    />
                </Typography>
            </Box>
            <Box sx={{ marginBottom: 30 }}>
                <Typography variant='h3' gutterBottom align="center" sx={{ marginBottom: { xs: 5, md: 13 } }}>{hobbiesAndInterests.title}</Typography>
                {hobbiesAndInterests.items.map((item, index) => (
                    <InfoBox1 
                        key={index}
                        orientation={item.orientation} 
                        header={item.header} 
                        caption={item.caption} 
                        img1={item.img1} 
                        img2={item.img2} 
                    />
                ))}
            </Box>
        </motion.div>
    );
};

const InfoBox1 = ({orientation, header, caption, img1, img2}) => {

    const [containerRef, containerInView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const boxDirection = orientation === 'right' ? 'row' : 'row-reverse';
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));


    return (
        <motion.div 
            ref={containerRef} 
            variants={containerVariants} 
            initial='hidden' 
            animate={containerInView ? 'visible' : 'hidden'} 
            exit='hidden'
        >
            <Grid container direction={isLargeScreen ? boxDirection : 'column'} wrap='wrap' justifyContent='center' alignItems='center' marginBottom={{ xs: 10, md: 38 }}>
                <Grid item xs={12} sm={5} sx={{ textAlign: 'center' }}>
                    <Typography variant='h4' sx={{ lineHeight: 2 }}>{header}</Typography>
                    <Typography variant='body1' sx={{ mx: 4 }}>{caption}</Typography>
                </Grid>
                {isLargeScreen && (
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: -100 }}>
                        <Box component='img' width={{sm: 400}} src={img1} alt='Picture 1' sx={{ marginRight: 30, zIndex: 1, position: 'absolute', border: `1px solid`, borderColor: (theme) => theme.palette.text.primary, borderRadius: 2, pointerEvents: 'none', maxWidth: { xs: '100%', sm: '150%' }, height: 'auto' }} />
                        <Box component='img' width={{sm: 400}} src={img2} alt='Picture 2' sx={{ marginRight: -30, top: 90,  zIndex: 1, position: 'absolute', border: `1px solid`, borderColor: (theme) => theme.palette.text.primary, borderRadius: 2, pointerEvents: 'none', maxWidth: { xs: '100%', sm: '150%' }, height: 'auto' }} />
                    </Grid>
                )}
                {isSmallScreen && (
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', top: 20 }}>
                        <Box component='img' width='60vw' height='auto' src={img1} alt='Picture 1' sx={{ border: `1px solid`, borderColor: (theme) => theme.palette.text.primary, borderRadius: 2, pointerEvents: 'none' }} />
                        <Box component='img' width='60vw' height='auto' src={img2} alt='Picture 2' sx={{ border: `1px solid`, borderColor: (theme) => theme.palette.text.primary, borderRadius: 2, pointerEvents: 'none' }} />
                    </Grid>
                )}
            </Grid>
        </motion.div>
    );
}

export default AboutMe;

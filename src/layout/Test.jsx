import React, { useMemo } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

    return(
        <>
            <></>
        </>
    );
};

const InfoBox1 = ({orientation, header, caption, img1, img2}) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [containerRef, containerInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const boxDirection = orientation === 'right' ? 'row' : 'row-reverse';

    return(
        <motion.div ref={containerRef} variants={containerVariants} initial='hidden' animate={containerInView ? 'visible' : 'hidden'} exit='hidden'>
            <Grid2 container direction={boxDirection} columnSpacing='1' wrap='wrap' sx={{ position: 'relative' }}>
                <Grid2 direction='column' wrap='wrap'>
                    <Typography variant='h5'>{header}</Typography>
                    <Typography variant='body1'>{caption}</Typography>
                </Grid2>
                <motion.div ref={ref} variants={cardVariants} initial='hidden' animate={inView ? 'visible' : 'hidden'} >
                    <Card sx={{ position: 'absolute' }}>
                        <CardMedia component='img' image={img1} alt='Picture 1'/>
                        <CardMedia component='img' image={img2} alt='Picture 2'/>
                    </Card>
                </motion.div>
            </Grid2>
        </motion.div>
    );
}

//export default AboutMe;
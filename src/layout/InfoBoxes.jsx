import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const InfoBox1 = ({ orientation, header, caption, img1, img2 }) => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const boxDirection = orientation === "right" ? "row" : "row-reverse";
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={containerInView ? "visible" : "hidden"}
      exit="hidden"
    >
      <Grid
        container
        direction={isLargeScreen ? boxDirection : "column"}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        marginBottom={{ xs: 10, md: 38 }}
      >
        <Grid item xs={12} sm={5} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ lineHeight: 2 }}>
            {header}
          </Typography>
          <Typography variant="body1" sx={{ mx: 4 }}>
            {caption}
          </Typography>
        </Grid>
        {isLargeScreen && (
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              top: -100,
            }}
          >
            <Box
              component="img"
              width={{ sm: 400 }}
              src={img1}
              alt="Picture 1"
              sx={{
                marginRight: 30,
                zIndex: 1,
                position: "absolute",
                border: `1px solid`,
                borderColor: (theme) => theme.palette.text.primary,
                borderRadius: 2,
                pointerEvents: "none",
                maxWidth: { xs: "100%", sm: "150%" },
                height: "auto",
              }}
            />
            <Box
              component="img"
              width={{ sm: 400 }}
              src={img2}
              alt="Picture 2"
              sx={{
                marginRight: -30,
                top: 90,
                zIndex: 1,
                position: "absolute",
                border: `1px solid`,
                borderColor: (theme) => theme.palette.text.primary,
                borderRadius: 2,
                pointerEvents: "none",
                maxWidth: { xs: "100%", sm: "150%" },
                height: "auto",
              }}
            />
          </Grid>
        )}
        {isSmallScreen && (
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              top: 20,
            }}
          >
            <Box
              component="img"
              width="60vw"
              height="auto"
              src={img1}
              alt="Picture 1"
              sx={{
                border: `1px solid`,
                borderColor: (theme) => theme.palette.text.primary,
                borderRadius: 2,
                pointerEvents: "none",
              }}
            />
            <Box
              component="img"
              width="60vw"
              height="auto"
              src={img2}
              alt="Picture 2"
              sx={{
                border: `1px solid`,
                borderColor: (theme) => theme.palette.text.primary,
                borderRadius: 2,
                pointerEvents: "none",
              }}
            />
          </Grid>
        )}
      </Grid>
    </motion.div>
  );
};

export const InfoBox2 = ({
  orientation,
  header,
  caption,
  img,
  clickableImgs = false,
}) => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const boxDirection = orientation === "right" ? "row" : "row-reverse";
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={containerInView ? "visible" : "hidden"}
      exit="hidden"
    >
      <Grid
        container
        direction={isLargeScreen ? boxDirection : "column"}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        marginBottom={{ xs: 10, md: 8 }}
      >
        <Grid item xs={12} sm={5} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ lineHeight: 2 }}>
            {header}
          </Typography>
          <Typography variant="body1" sx={{ mx: 4 }}>
            {caption}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={img}
            alt="Info Graphic"
            sx={{
              width: isSmallScreen ? "60vw" : { sm: 400 },
              height: "auto",
              border: "1px solid",
              borderColor: (theme) => theme.palette.text.primary,
              borderRadius: 2,
              pointerEvents: clickableImgs ? "auto" : "none",
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

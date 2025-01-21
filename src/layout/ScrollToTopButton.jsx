import React, { useState, useEffect, useCallback } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = useCallback(() => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, [toggleVisible]);

    return (
        <Zoom in={visible}>
            <Fab 
                onClick={scrollToTop} 
                color="primary" 
                sx={{ position: 'fixed', bottom: 32, right: 32 }}
                aria-label="scroll back to top"
            >
                <KeyboardArrowUp />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTopButton;

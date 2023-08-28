'use client';

import { motion } from 'framer-motion';

type Props = {
    text: string;
};

export const AnimatedTitle = ({ text }: Props) => {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { delayChildren: 0.04 * i, staggerChildren: 0.12 },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            transition: {
                damping: 12,
                stiffness: 100,
                type: 'spring',
            },
            x: 20,
        },
        visible: {
            opacity: 1,
            transition: {
                damping: 12,
                stiffness: 100,
                type: 'spring',
            },
            x: 0,
        },
    };

    return (
        <motion.div style={{ display: 'flex', fontSize: '2rem', overflow: 'hidden' }} variants={container} initial="hidden" animate="visible">
            <h1>
                {words.map((word, index) => (
                    <motion.span variants={child} style={{ marginRight: '5px' }} key={index}>
                        {word}
                    </motion.span>
                ))}
            </h1>
        </motion.div>
    );
};

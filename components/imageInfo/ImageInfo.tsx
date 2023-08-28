'use client';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ImageInfo = () => {
    const [visible, setVisible] = useState<boolean>(true);

    return (
        <motion.section
            animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -250 }}
            initial={{ opacity: 0, x: -250 }}
            transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
            className="absolute p-4 text-white bottom-0 z-30 w-full flex bg-black/70 gap-4 font-thin"
        >
            <div>
                <h3 className="text-2xl">Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </div>
            <ChevronLeftIcon onClick={() => setVisible(false)} className="w-12 opacity-70 hover:cursor-pointer" />
        </motion.section>
    );
};

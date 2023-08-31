'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { ComponentPropsWithRef, ReactNode, useEffect, useRef } from 'react';

type Props = ComponentPropsWithRef<'section'> & {
    children: ReactNode;
    from?: 'left' | 'right';
};

export const AnimatedSection = ({ children, className, from }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animation = useAnimation();

    useEffect(() => {
        if (isInView) {
            animation.start({
                transition: {
                    bounce: 0.1,
                    duration: 2,
                    type: 'spring',
                },
                x: 0,
            });
        }
        if (!isInView) {
            animation.start({
                x: '-200vw',
            });
        }
    }, [animation, isInView]);

    return (
        <section ref={ref} className={`${className} p-4`} style={{ height: '101vh' }}>
            {from && (
                <motion.div animate={animation} className="block">
                    {children}
                </motion.div>
            )}
        </section>
    );
};

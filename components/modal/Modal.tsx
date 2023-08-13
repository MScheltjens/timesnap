'use client';

import { motion } from 'framer-motion';
import { MouseEventHandler, useCallback, useEffect, useRef, ReactNode, Dispatch, SetStateAction } from 'react';
import { useScrollLock } from '@/hooks';

type Props = {
    children: ReactNode;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ children, visible, setVisible }: Props) => {
    // TODO: typing
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const { lockScroll, unlockScroll } = useScrollLock();

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (setVisible) setVisible(false);
            }
        },
        [setVisible, overlay, wrapper],
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') setVisible(false);
        },
        [setVisible],
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    useEffect(() => {
        if (visible) {
            lockScroll();
            return;
        }
        unlockScroll();
    }, [lockScroll, unlockScroll, visible]);

    if (!visible) return null;

    return (
        <motion.div
            ref={overlay}
            className="absolute z-10 inset-0 bg-black/60 h-screen w-full"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                ref={wrapper}
                variants={{ exit: { opacity: 0, y: '100vh' }, hidden: { opacity: 0, y: '-100vh' }, visible: { opacity: 1, y: '0' } }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

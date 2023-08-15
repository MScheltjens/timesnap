'use client';

import { motion } from 'framer-motion';
import { MouseEventHandler, useCallback, useEffect, useRef, ReactNode, Dispatch, SetStateAction } from 'react';
import { useScrollLock } from '@/hooks';

type Props = {
    children: ReactNode;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    onlyBackdrop?: boolean;
};

export const Modal = ({ children, visible, setVisible, onlyBackdrop }: Props) => {
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
            className="fixed z-10 inset-0 bg-black/70 h-screen backdrop-blur-md w-full flex"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`${onlyBackdrop && 'flex-1'}`} ref={wrapper}>
                {children}
            </div>
        </motion.div>
    );
};

'use client';

import { motion } from 'framer-motion';
import { MouseEventHandler, useCallback, useEffect, useRef, ReactNode, Dispatch, SetStateAction } from 'react';
import { Backdrop } from '../backdrop/Backdrop';
import { useScrollLock } from '@/hooks';

type Props = {
    children: ReactNode;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ children, visible, setVisible }: Props) => {
    const backdrop = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const { lockScroll, unlockScroll } = useScrollLock();

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === backdrop.current || e.target === wrapper.current) {
                if (setVisible) setVisible(false);
            }
        },
        [setVisible, backdrop, wrapper],
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
        <Backdrop ref={backdrop} onClick={onClick}>
            <motion.div
                animate={{ y: 0 }}
                initial={{ y: '100vh' }}
                transition={{ duration: 0.5 }}
                className="flex w-full sm:w-5/6 sm:h-5/6 lg:w-4/6 xl:w-3/6  h-4/6  mx-auto mt-24"
                ref={wrapper}
            >
                {children}
            </motion.div>
        </Backdrop>
    );
};

// we forward the ref component to the backdrop. Putting the ref logic in the backdrop component itself would make eg. forms also close

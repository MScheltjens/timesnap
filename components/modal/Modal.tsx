'use client';

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
        // h-screen could be replaced with h-full if not possible to disable scrolling
        <div ref={overlay} className={`fixed z-10 inset-0 h-screen bg-black/60`} onClick={onClick}>
            <div
                ref={wrapper}
                className={`absolute left-1/2 top-44 -translate-x-1/2 -translate-y-1/2 w-ful h-full  sm:w-10/12 md:w-8/12 lg:w-1/2 p-6 flex justify-center items-center`}
            >
                {children}
            </div>
        </div>
    );
};

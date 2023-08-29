'use client';

type Props = {
    children: ReactNode;
    onClick: MouseEventHandler;
    ref: MutableRefObject<null>;
};

import { MouseEventHandler, MutableRefObject, ReactNode, forwardRef } from 'react';

export const Backdrop = forwardRef<HTMLDivElement, Props>(({ children, onClick }, ref) => {
    return (
        <div ref={ref} className="fixed z-10 inset-0 bg-black/70 h-screen backdrop-blur-md w-full" onClick={onClick}>
            {children}
        </div>
    );
});

Backdrop.displayName = 'backdrop';

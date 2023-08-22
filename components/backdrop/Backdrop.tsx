// import { MouseEventHandler, ReactNode, forwardRef } from 'react';
// export type Ref = HTMLDivElement;
import { motion } from 'framer-motion';

type Props = {
    children: ReactNode;
    onClick: MouseEventHandler;
    ref: MutableRefObject<null>;
};

import { MouseEventHandler, MutableRefObject, ReactNode, forwardRef } from 'react';

export const Backdrop = forwardRef<HTMLDivElement, Props>(({ children, onClick }, ref) => {
    console.log(ref);
    return (
        <motion.div
            ref={ref}
            className="fixed z-10 inset-0 bg-black/70 h-screen backdrop-blur-md w-full"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
});

Backdrop.displayName = 'backdrop';

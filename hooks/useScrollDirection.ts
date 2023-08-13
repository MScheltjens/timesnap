import { useState, useCallback, useEffect } from 'react';

export type TScrollDirection = '' | 'up' | 'down';

export const useScrollDirection = (offset: number): TScrollDirection => {
    const [scrollDirection, setScrollDirection] = useState<TScrollDirection>('');
    const [prevOffset, setPrevOffset] = useState(0);

    const toggleScrollDirection = useCallback(() => {
        let scrollY = window.scrollY;
        if (scrollY > prevOffset && scrollY > offset) {
            setScrollDirection('down');
        } else if (scrollY < prevOffset && scrollY > 50) {
            setScrollDirection('up');
        } else {
            setScrollDirection('');
        }
        setPrevOffset(scrollY);
    }, [offset, prevOffset]);

    useEffect(() => {
        window.addEventListener('scroll', toggleScrollDirection);
        return () => {
            window.removeEventListener('scroll', toggleScrollDirection);
        };
    });

    return scrollDirection;
};

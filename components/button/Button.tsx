'use client';
import { ComponentProps, ReactNode } from 'react';

type Props = Omit<ComponentProps<'button'>, 'onClick'> & {
    onClick: () => void;
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    link?: string;
    outline?: boolean;
    disabled?: boolean;
    className: string;
    type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ children, type, onClick, ...rest }: Props) => {
    return (
        <button onClick={onClick} type={type} {...rest}>
            {children}
        </button>
    );
};

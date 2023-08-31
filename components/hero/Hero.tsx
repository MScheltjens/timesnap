'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { AnimatedText } from '../animatedText/AnimatedText';
import { Logo } from '../svgs';
import { formatToHref } from '@/utils';

type Props = {
    id: string;
    nextId?: string;
    image: StaticImageData;
    title?: string;
    text?: string;
    textDark?: boolean;
    header?: boolean;
};

/* TODO: text and heading animation animation */

export const Hero = ({ header, id, nextId, image, title, text, textDark }: Props) => {
    const formattedPath = formatToHref(title);
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true });
    const animation = useAnimation();

    useEffect(() => {
        if (isInView) {
            animation.start({
                transition: {
                    bounce: 0.1,
                    duration: 1,
                    type: 'spring',
                },
                y: 0,
            });
        }
        if (!isInView) {
            animation.start({
                y: '400px',
            });
        }
    }, [animation, isInView]);

    return (
        <section id={id} className={`${textDark && 'text-black'} relative w-full flex justify-center text-center`} style={{ height: '105vh' }}>
            <Image alt={id} src={image} sizes="100vw" fill className="relative object-cover" blurDataURL={image.src} placeholder="blur" />
            <motion.div
                className="flex flex-col items-center pt-[15%] backdrop-blur-sm w-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, ease: 'easeIn' } }}
            >
                {header && (
                    <>
                        <div className="flex items-center gap-4 mt-16">
                            <Logo className="fill-black" />
                            <h1 className="text-5xl tracking-widest uppercase">
                                Time <span className="font-semibold">Snap</span>
                            </h1>
                        </div>
                        {text && <AnimatedText text={text} className={`p-4 mt-8 ${textDark && 'text-black'}`} />}
                    </>
                )}
                <motion.div ref={ref} animate={animation}>
                    {title && (
                        <Link href={formattedPath} className="text-lg uppercase tracking-widest underline underline-offset-8">
                            <>{title}</>
                        </Link>
                    )}

                    {!header && text && <p className="text-md mt-24 w-4/6 mx-auto">{text}</p>}
                </motion.div>
            </motion.div>
            <Link href={`#${nextId}`} className="absolute bottom-24 w-full flex justify-center">
                {nextId === 'home' ? (
                    <ChevronUpIcon className={`h-10 w-10 hover:cursor-pointer hover:animate-ping opacity-70`} />
                ) : (
                    <ChevronDownIcon className={`h-10 w-10 hover:cursor-pointer hover:animate-ping opacity-70`} />
                )}
            </Link>
        </section>
    );
};

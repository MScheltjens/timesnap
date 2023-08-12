"use client";

import { Dispatch, MouseEventHandler, SetStateAction, useCallback, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
export const Modal = ({ children, visible, setVisible }: Props) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (setVisible) setVisible(false);
      }
    },
    [setVisible, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    },
    [setVisible]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  if (!visible) return null;

  return (
    <div ref={overlay} className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60" onClick={onClick}>
      <div ref={wrapper} className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6 ">
        {children}
      </div>
    </div>
  );
};

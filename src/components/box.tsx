'use client';
import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { Button } from './button';
import { AnimatePresence, motion } from 'framer-motion';
import { MaximizeIcon, MinimizeIcon, CloseIcon } from './icons';

export const Box: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
}> = ({ id, title, children, onClose, onMinimize }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [data, setData] = useLocalStorage(`component-[${id}]`, { x: 0, y: 0, width: 400, height: 300 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Rnd
      size={{
        width: data.width,
        height: isMinimized ? '40' : data.height,
      }}
      minHeight={40}
      minWidth={250}
      default={{
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
      }}
      onResizeStop={(_, __, ref) => {
        setData((data) => ({
          ...data,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        }));
      }}
      onDragStop={(_, { x, y }) => {
        setData((data) => ({
          ...data,
          x,
          y,
        }));
      }}
    >
      <motion.div
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        className="p-2 bg-[#202123] rounded flex flex-col w-full h-full"
      >
        <div className="flex justify-between items-center cursor-move p-1 rounded-t-lg">
          <span className="text-[#c4c4c4]">{title || 'YouTube'}</span>
          <AnimatePresence mode="wait">
            {isHovering && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Button
                  onClick={() => {
                    setIsMinimized(!isMinimized);
                    onMinimize?.();
                  }}
                  className="mr-2"
                >
                  {isMinimized ? <MaximizeIcon size={14} /> : <MinimizeIcon size={14} />}
                </Button>
                <Button onClick={onClose}>
                  <CloseIcon size={14} />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">{!isMinimized && children}</AnimatePresence>
      </motion.div>
    </Rnd>
  );
};

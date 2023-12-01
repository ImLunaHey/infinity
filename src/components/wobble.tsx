import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';

export const Wobble: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [dragState, setDragState] = useState({ x: 0, y: 0, isDragging: false });

  const handleDrag = (e: any, data: { x: number; y: number }) => {
    setDragState({ x: data.x, y: data.y, isDragging: true });
  };

  const handleStop = () => {
    setDragState({ x: 0, y: 0, isDragging: false });
  };

  // Calculate skew values based on dragState
  const skewX = dragState.isDragging ? dragState.x * 0.005 : 0;
  const skewY = dragState.isDragging ? dragState.y * 0.005 : 0;

  return <>{children}</>;

  return (
    <Draggable onDrag={handleDrag} onStop={handleStop}>
      <motion.div
        style={{
          skewX: `${skewX}deg`,
          skewY: `${skewY}deg`,
          transition: dragState.isDragging ? 'none' : 'skew 0.2s ease repeat',
        }}
      >
        {children}
      </motion.div>
    </Draggable>
  );
};

'use client';
import React, { useState, useEffect } from 'react';
import { Youtube } from './embeds/youtube';
import { Wobble } from './wobble';

const Controls: React.FC<{
  onClick?: () => void;
}> = ({ onClick }) => {
  return (
    <div className="absolute bottom-2 right-2 p-2">
      <button onClick={onClick}>go home</button>
    </div>
  );
};

const InfiniteCanvas = () => {
  const [components, setComponents] = useState([
    <Youtube key="5aYTx2ROngo" videoId={'5aYTx2ROngo'} />,
    <Youtube key="jm91RK9QnuQ" videoId={'jm91RK9QnuQ'} />,
  ]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (event: WheelEvent) => {
    setPosition((prevPosition) => ({
      x: prevPosition.x - event.deltaX,
      y: prevPosition.y - event.deltaY,
    }));
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <div
        className="w-screen h-screen relative overflow-visible"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {components.map((Component, index) => (
          <div key={index} className="absolute" style={{ top: `${(index + 1) * 250}px`, left: '100px' }}>
            <Wobble>{Component}</Wobble>
          </div>
        ))}
      </div>
      <Controls
        onClick={() => {
          setPosition({ x: 0, y: 0 });
        }}
      />
    </div>
  );
};

export default InfiniteCanvas;

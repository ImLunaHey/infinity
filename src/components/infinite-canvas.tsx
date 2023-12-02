'use client';
import React, { useState, useEffect } from 'react';
import { Youtube } from './embeds/youtube';
import { useLocalStorage } from '@uidotdev/usehooks';
import { WebPage } from './embeds/web-page';
import { HomeIcon } from './icons';

const Controls: React.FC<{
  onClick?: () => void;
}> = ({ onClick }) => {
  return (
    <div className="absolute bottom-2 right-2 p-2">
      <button onClick={onClick}>
        <HomeIcon />
      </button>
    </div>
  );
};

const InfiniteCanvas = () => {
  const [components, setComponents] = useState([
    <Youtube key="5aYTx2ROngo" videoId={'5aYTx2ROngo'} />,
    <Youtube key="jm91RK9QnuQ" videoId={'jm91RK9QnuQ'} />,
    <WebPage key="https://fish.lgbt" url="https://fish.lgbt" />,
  ]);
  const [position, setPosition] = useLocalStorage('position', { x: 0, y: 0 });

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      setPosition((prevPosition) => ({
        x: prevPosition.x - event.deltaX,
        y: prevPosition.y - event.deltaY,
      }));
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [setPosition]);

  return (
    <div>
      <div
        className="w-screen h-screen relative overflow-visible"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {components.map((component, index) => (
          <div key={index} className="absolute" style={{ top: `${(index + 1) * 250}px`, left: '100px' }}>
            {component}
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

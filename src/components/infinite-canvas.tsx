'use client';
import React, { useState, useEffect } from 'react';
import { Youtube } from './embeds/youtube';
import { useLocalStorage } from '@uidotdev/usehooks';
import { WebPage } from './embeds/web-page';
import { HomeIcon } from './icons';
import { Button } from './button';

const Controls: React.FC<{
  onClick?: () => void;
}> = ({ onClick }) => {
  return (
    <div className="absolute bottom-2 right-2">
      <Button onClick={onClick}>
        <HomeIcon />
      </Button>
    </div>
  );
};

const InfiniteCanvas = () => {
  const [components, setComponents] = useState([
    ({ onClose }: { onClose: () => void }) => <Youtube onClose={onClose} key="5aYTx2ROngo" videoId={'5aYTx2ROngo'} />,
    ({ onClose }: { onClose: () => void }) => <Youtube onClose={onClose} key="jm91RK9QnuQ" videoId={'jm91RK9QnuQ'} />,
    ({ onClose }: { onClose: () => void }) => <WebPage onClose={onClose} key="https://fish.lgbt" url="https://fish.lgbt" />,
    ({ onClose }: { onClose: () => void }) => (
      <WebPage onClose={onClose} key="https://pretty.fish.lgbt" url="https://pretty.fish.lgbt" />
    ),
    ({ onClose }: { onClose: () => void }) => (
      <WebPage onClose={onClose} key="https://dns.fish.lgbt" url="https://dns.fish.lgbt" />
    ),
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
        {components.map((Component, index) => (
          <div key={index} className="absolute" style={{ top: `${(index + 1) * 250}px`, left: '100px' }}>
            <Component
              onClose={() =>
                setComponents((components) => {
                  const newComponents = [...components];
                  newComponents.splice(index, 1);
                  return newComponents;
                })
              }
            />
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

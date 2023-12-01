import { cn } from '@/cn';
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export const Youtube: React.FC<{
  videoId: string;
  onClose?: () => void;
  onMinimize?: () => void;
}> = ({ videoId, onClose, onMinimize }) => {
  const [title, setTitle] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const noembedUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;

  useEffect(() => {
    fetch(noembedUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('got data', data);
        if (data.title) {
          setTitle(data.title);
        }
      })
      .catch((error) => console.error('Error fetching video info:', error));
  }, [videoId, noembedUrl]);

  return (
    <Draggable handle=".handle">
      <div
        className={cn('p-2 bg-[#232323d9] rounded', {
          'w-24': isMinimized,
          'w-full h-full': !isMinimized,
        })}
      >
        <div className="handle flex justify-between items-center cursor-move p-1 rounded-t-lg">
          <span className="text-white">{title || 'YouTube'}</span>
          <div>
            <button onClick={() => setIsMinimized(!isMinimized)} className="mr-2">
              -
            </button>
            <button onClick={onClose}>x</button>
          </div>
        </div>
        {!isMinimized && (
          <iframe className="w-full h-full border-none" src={videoUrl} title="YouTube video player" allowFullScreen></iframe>
        )}
      </div>
    </Draggable>
  );
};

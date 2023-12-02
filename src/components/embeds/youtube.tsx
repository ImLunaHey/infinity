'use client';
import { cn } from '@/cn';
import React, { useState, useEffect } from 'react';
import { Box } from '../box';

export const Youtube: React.FC<{
  videoId: string;
  onClose?: () => void;
}> = ({ videoId, onClose }) => {
  const [title, setTitle] = useState('Loading...');
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const noembedUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;

  useEffect(() => {
    fetch(noembedUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.title) {
          setTitle(data.title);
        }
      })
      .catch((error) => console.error('Error fetching video info:', error));
  }, [videoId, noembedUrl]);

  return (
    <Box id={`youtube-${videoId}`} title={title} onClose={onClose}>
      <iframe className={cn('w-full border-none h-full')} src={videoUrl} title="YouTube video player" allowFullScreen />
    </Box>
  );
};

'use client';

import { useEffect, useState } from 'react';
import { Box } from '../box';

export const WebPage: React.FC<{
  url: string;
}> = ({ url }) => {
  const [title, setTitle] = useState('Loading...');

  useEffect(() => {
    fetch(`/api/fetch-info?url=${encodeURIComponent(url)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.title) {
          setTitle(data.title);
        }
      })
      .catch((error) => console.error('Error fetching website title:', error));
  }, [url]);

  return (
    <Box id={`web-page-${url}`} title={title}>
      <iframe src={url} title="Web Page Embed" className="w-full h-full border-none" />
    </Box>
  );
};

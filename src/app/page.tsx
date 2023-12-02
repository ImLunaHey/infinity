'use client';
import InfiniteCanvas from '@/components/infinite-canvas';
import { Pixel } from '@/components/pixel';
import { useIsClient } from '@uidotdev/usehooks';

export default function Home() {
  const isClient = useIsClient();

  if (isClient === false) {
    return null;
  }

  return (
    <>
      <InfiniteCanvas />
      <Pixel domain="∞.fish.lgbt" />
    </>
  );
}

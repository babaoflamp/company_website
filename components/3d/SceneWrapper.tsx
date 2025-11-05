'use client';

import dynamic from 'next/dynamic';

// Dynamically import Scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('./Scene'), { ssr: false });

export default function SceneWrapper() {
  return <Scene />;
}

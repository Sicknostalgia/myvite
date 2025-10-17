import { Html, useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      // Add a small delay for smooth transition
      const timeout = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!showLoader) return null; // completely remove loader

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'black', // optional
        width: '100vw',
        height: '100vh',
      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;

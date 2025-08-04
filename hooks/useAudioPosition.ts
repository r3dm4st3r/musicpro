import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";

export const useAudioPosition = () => {
  const frameRef = useRef<number>(0);
  const [pos, setPos] = useState(0);
  const { getPosition } = useAudioPlayer();

  useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      if (frameRef.current) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  return pos;
};

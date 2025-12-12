import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10);
        
        // Check if the last 10 keys match the Konami code
        const matches = KONAMI_CODE.every((key, i) => key === newKeys[i]);
        
        if (matches && !activated) {
          setActivated(true);
          triggerEasterEgg();
          // Reset after 5 seconds
          setTimeout(() => {
            setActivated(false);
            setKeys([]);
          }, 5000);
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activated]);

  const triggerEasterEgg = () => {
    // Confetti celebration
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Log message to console
    console.log(
      '%c🎮 KONAMI CODE ACTIVATED! 🎮',
      'font-size: 24px; font-weight: bold; color: #ff6b6b; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
    );
    console.log(
      '%cYou found the secret! 🎉',
      'font-size: 16px; color: #4ecdc4;'
    );
  };

  return (
    <>
      {activated && (
        <div className="fixed inset-0 pointer-events-none z-[9998] flex items-center justify-center">
          <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></div>
          <div className="relative px-8 py-4 bg-primary rounded-lg shadow-2xl animate-bounce">
            <h2 className="text-4xl font-bold text-white">🎮 KONAMI CODE! 🎮</h2>
            <p className="text-xl text-white mt-2">You're a true gamer! 🎉</p>
          </div>
        </div>
      )}
    </>
  );
}

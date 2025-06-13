import React, { useEffect, useState } from 'react';

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const end = new Date();
    end.setHours(end.getHours() + 18);

    const updateTimer = () => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<div className="w-full bg-neon-pink text-white text-center py-4 px-4 text-lg sm:text-xl font-bold shadow-md z-50">
  🎉 Oferta por tempo limitado! Termina em <span className="ml-2 text-black bg-white px-3 py-1.5 rounded">{timeLeft}</span>
</div>

  );
};

export default CountdownBanner;

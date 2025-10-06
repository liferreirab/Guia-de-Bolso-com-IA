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
<div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center py-4 px-4 text-lg sm:text-xl font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)] z-50">
  🎉 Oferta por tempo limitado! Termina em
  <span
    className="ml-3 inline-flex items-center rounded-lg 
               bg-gradient-to-r from-yellow-300 to-orange-400 
               text-black px-3 py-1.5 
               shadow-[0_6px_18px_rgba(251,191,36,0.35)] 
               animate-pulse [animation-duration:3s]"
  >
    {timeLeft}
  </span>
</div>

  );
};

export default CountdownBanner;

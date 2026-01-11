import React from 'react';

// Generate random values outside component to avoid re-render issues
const generateStars = () => 
  Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 3,
    animationDuration: 2 + Math.random() * 2,
  }));

const generateMeteors = () => 
  Array.from({ length: 3 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: i * 2,
  }));

const stars = generateStars();
const meteors = generateMeteors();

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Meteors */}
      <div className="absolute inset-0">
        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-meteor opacity-70"
            style={{
              left: `${meteor.left}%`,
              animationDelay: `${meteor.animationDelay}s`,
              animationDuration: '5s',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AnimatedBackground;
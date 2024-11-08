import React from 'react';

const HexGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(35,166,213,0.1)_0,rgba(35,166,213,0)_50%)]" />
      <div className="absolute w-full h-full opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute hexagon bg-gradient-to-br from-purple-500/10 to-blue-500/10"
            style={{
              width: '200px',
              height: '200px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HexGrid;
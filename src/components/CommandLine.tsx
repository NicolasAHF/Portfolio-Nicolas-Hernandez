import React, { useState, useEffect } from 'react';

const CommandLine: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const commands = [
    '> Loading skills...',
    '> Initializing expertise...',
    '> npm install @nicolas/fullstack',
    '> Running test suites...',
    '> All systems operational'
  ];

  useEffect(() => {
    if (currentIndex >= commands.length) return;

    let charIndex = 0;
    const command = commands[currentIndex];
    const intervalId = setInterval(() => {
      if (charIndex <= command.length) {
        setCurrentCommand(command.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="mt-12 text-left max-w-2xl mx-auto">
      <div className="bg-black/50 p-6 rounded-lg border border-green-500/30">
        {commands.slice(0, currentIndex).map((cmd, i) => (
          <div key={i} className="text-green-500 mb-2">{cmd}</div>
        ))}
        {currentIndex < commands.length && (
          <div className="text-green-500">
            {currentCommand}
            <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandLine;
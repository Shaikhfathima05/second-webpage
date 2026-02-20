import { useState, useEffect } from 'react';
import './TextType.css';

const TextType = ({
  texts = ["Text typing effect"],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const getSpeed = () => {
      if (variableSpeedEnabled) {
        return Math.random() * (variableSpeedMax - variableSpeedMin) + variableSpeedMin;
      }
      return isDeleting ? deletingSpeed : typingSpeed;
    };

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, getSpeed());

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration, variableSpeedEnabled, variableSpeedMin, variableSpeedMax]);

  return (
    <span className="text-type-container">
      <span className="text-type-text">{displayText}</span>
      {showCursor && (
        <span 
          className="text-type-cursor" 
          style={{ animationDuration: `${cursorBlinkDuration}s` }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;

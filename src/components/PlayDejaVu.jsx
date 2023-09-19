import React, { useEffect } from 'react';

export default function PlayDejaVu() {
  const audio = new Audio('public/dejavu_song.mp3';
  useEffect(() => {
    // Create an audio element
    console.log(audio)
    
    // Load and play the audio when the component mounts
    audio.play();

    // Clean up the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <h1>Auto Play Audio</h1>
    </div>
  );
}

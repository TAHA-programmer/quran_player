import React from 'react';

function AudioPlayer({ surah }) {
  return (
    <section id="audioPlayer" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Audio Player</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{surah.name}</h3>
        <audio controls className="my-4">
          <source src={surah.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}

export default AudioPlayer;

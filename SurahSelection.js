import React, { useState } from 'react';

function SurahSelection({ onSelectSurah }) {
  const [selectedSurah, setSelectedSurah] = useState('');

  const handleSelectSurah = () => {
    // Simulated data for selected surah
    const surahDetails = { name: 'Surah Name', audioUrl: 'audioUrl.mp3' };
    onSelectSurah(surahDetails);
  };

  return (
    <section id="surahSelection" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Select Surah</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Render options for available surahs */}
        <button onClick={handleSelectSurah} className="bg-white p-4 rounded-lg shadow-md">Surah 1</button>
        <button onClick={handleSelectSurah} className="bg-white p-4 rounded-lg shadow-md">Surah 2</button>
        <button onClick={handleSelectSurah} className="bg-white p-4 rounded-lg shadow-md">Surah 3</button>
      </div>
    </section>
  );
}

export default SurahSelection;

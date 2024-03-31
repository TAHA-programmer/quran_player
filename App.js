import React, { useState, useEffect } from 'react';
import QariList from './QariList';
import SurahSelection from './SurahSelection';
import AudioPlayer from './AudioPlayer';
import Bookmark from './Bookmark';

function App() {
  const [qaris, setQaris] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);

  // Fetch qaris from API
  useEffect(() => {
    // Simulated data for Qari list
    const fetchedQaris = [
      { id: 1, name: 'Qari 1' },
      { id: 2, name: 'Qari 2' },
      { id: 3, name: 'Qari 3' },
    ];
    setQaris(fetchedQaris);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <QariList qaris={qaris} />
      <SurahSelection onSelectSurah={setSelectedSurah} />
      {selectedSurah && <AudioPlayer surah={selectedSurah} />}
      <Bookmark />
    </div>
  );
}

export default App;

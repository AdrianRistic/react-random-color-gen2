import chalk from 'chalk';
import randomcolor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [lum, setLum] = useState('');
  const [col, setCol] = useState('');

  const [color] = randomcolor({
    luminosity: lum,
    hue: col,
  });

  return (
    <div>
      <h1>Random Color Generator</h1>
      <button onClick={() => {}}>Generate</button>
      <div>Color: </div>
    </div>
  );
}

export default App;

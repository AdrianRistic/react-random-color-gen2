import './App.css';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000');

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const colornew = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(colornew.r, colornew.g, colornew.b));
  };

  return (
    <div style={{ backgroundColor: color }} className="container">
      {' '}
      <button style={{ color: color }} onClick={handleGenerate}>
        'Generate'
      </button>
    </div>
  );
};
export default RandomColor;

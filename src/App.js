import './App.css';
import QRCode from 'react-qr-code';
import QrCodeLink from 'qrcode';
import { useState } from 'react';

function App() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(link_url) {
    QrCodeLink.toDataURL(
      link_url,
      { width: 600, margin: 3 },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <h1>Gerador de QRCode</h1>
      <QRCode value={link} />

      <input
        className="input"
        type="text"
        placeholder="Digite seu link..."
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a className="link" href={qrcodeLink} download={`qrcode.png`}>
        💾 Baixar QrCode
      </a>
    </div>
  );
}

export default App;

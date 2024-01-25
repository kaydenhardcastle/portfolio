import React from 'react';

import './DownloadLinkButton.scss';

const DownloadLink = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Resume.pdf`;
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className='resume-download-button'>
        Download Resume PDF
      </button>
    </div>
  );
};

export default DownloadLink;

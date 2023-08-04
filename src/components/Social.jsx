import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <FaGithub size={30} onClick={() => handleIconClick('https://github.com')} style={{ cursor: 'pointer' }} />
      <FaLinkedin size={30} onClick={() => handleIconClick('https://www.linkedin.com')} style={{ cursor: 'pointer' }} />
      <FaTwitter size={30} onClick={() => handleIconClick('https://twitter.com')} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default SocialIcons;
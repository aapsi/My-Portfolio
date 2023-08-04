import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-5 items-center space-x-4">
      <a href="https://github.com/aapsi" target="_blank" rel="noopener noreferrer">
        <FiGithub className="w-6 h-6 text-gray-700 hover:text-gray-800" />
      </a>
      <a href="https://www.linkedin.com/in/aapsi-khaira-308283162/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-600" />
      </a>
      <a href="https://twitter.com/AapsiK" target="_blank" rel="noopener noreferrer">
        <FiTwitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
      </a>
    </div>
  );
};

export default SocialIcons;

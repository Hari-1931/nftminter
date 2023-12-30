import React, { useState } from 'react';

const NFTListItem = ({ imageSrc, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  
};

export default NFTListItem;

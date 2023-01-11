import React from 'react';
import AtmImage from '../../atoms/AtmImage';

function MolPage({children, bgImage, bgColor}) {
  return (
    <AtmImage
      data={bgImage}
      bgColor={bgColor}
      size="cover"
      resizeMode="cover"
      flex={1}
      height="100%"
      flexDirection="column">
      {children}
    </AtmImage>
  );
}

export default MolPage;

import React from 'react';
import { InstaItem } from '../../components';

interface MediaItemProps {
  item: InstaItem
}

const MediaItem = ({ item }: MediaItemProps) => {
  const imageUrl = !!item.thumbnailUrl ? item.thumbnailUrl : item.mediaUrl;
  return(
    <a href={item.permalink} target="_blank" rel="noreferrer">
      <img src={imageUrl} style={{ display: 'block', objectFit: 'cover', width: '100%', height: '100%', aspectRatio: "1/ 1" }} />
    </a>
  );
}

export default MediaItem;

import React, { useEffect, useState } from 'react';
import {InstaGrid} from '../../components';

export type MediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export interface InstaItem {
  permalink: string;
  mediaUrl: string;
  mediaType: MediaType;
  thumbnailUrl?: string;
}

const InstaFeed = () => {
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

  const instaUrl = process.env.REACT_APP_INSTA_URL;
  useEffect(() => {
    const doFetch = async () => {
      if(!instaUrl) {
        return;
      }
      const res = await fetch(instaUrl);
      const json = await res.json();

      const fetchedItems: InstaItem[] = [];
      for(let i=0; i<json.length && i<9; i++) {
        const item = json[i];
        
        const instaItem: InstaItem = {
          permalink: item.permalink,
          mediaUrl: item.media_url,
          mediaType: item.media_type,
        }

        if(!!item.thumbnail_url) {
          instaItem.thumbnailUrl = item.thumbnail_url
        }

        fetchedItems.push(instaItem);
      }

      setInstaItems(fetchedItems);
    }

    doFetch();
  }, [instaUrl]);

  return (
    <InstaGrid items={instaItems} />
  );
}

export default InstaFeed;


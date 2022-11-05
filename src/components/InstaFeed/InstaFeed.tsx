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

  const instaUrl = "https://europe-west2-insta-query.cloudfunctions.net/test";

  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://europe-west2-insta-query.cloudfunctions.net/test2?id=${id}`;

      const res = await fetch(mediaUrl);
      const json = (await res.json());

      const instaItem: InstaItem = {
        permalink: json.permalink,
        mediaUrl: json.media_url,
        mediaType: json.media_type
      };

      if(!!json.thumbnail_url) {
        instaItem.thumbnailUrl = json.thumbnail_url;
      }

      return instaItem;
    }
    const doFetch = async () => {
      const res = await fetch(instaUrl);
      const json = (await res.json()).data;

      const fetchedItems: InstaItem[] = [];

      for(let i=0; i<json.length && i<9; i++) {
        const item = json[i];
        const itemId = item.id;

        const instaItem = await fetchMedia(itemId);
        fetchedItems.push(instaItem);
      }

      setInstaItems(fetchedItems);
    }

    doFetch();
  }, []);

  return (
    <InstaGrid items={instaItems} />
  );
}

export default InstaFeed;

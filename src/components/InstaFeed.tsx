import React, { useEffect, useState } from 'react';
import InstaGrid from './InstaGrid';

export interface InstaItem {
  permalink: string;
  mediaUrl: string;
}

const InstaFeed = () => {
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

  const userId = process.env.REACT_APP_USER_ID;
  const accessToken = process.env.REACT_APP_ACCESS_CODE;

  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;

  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`;

      const res = await fetch(mediaUrl);
      const json = (await res.json());

      const instaItem: InstaItem = {
        permalink: json.permalink,
        mediaUrl: json.media_url
      };

      return instaItem;
    }
    const doFetch = async () => {
      if(!userId || !accessToken) {

        console.log("userId or accessToken is undefined: ", {userId, accessToken});
        return;
      }
      const res = await fetch(instaUrl);
      const json = (await res.json()).data;
      console.log(json);

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

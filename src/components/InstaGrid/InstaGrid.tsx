import React from 'react';

import Skeleton from "@mui/material/Skeleton";

import { InstaItem, MediaItem } from '../../components';
import styled from '@emotion/styled';

interface InstaGridProps {
  items: InstaItem[];
}

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2%;
`

const InstaGrid = ({ items }: InstaGridProps) => {
  if (items.length === 0) {
    return (
      <StyledGrid>
        {(new Array(9)).fill(
          <Skeleton
            variant='rectangular'
            sx={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              aspectRatio: "1/ 1"
            }}
          />
        )}
      </StyledGrid>
    )
  }
  return (
    <StyledGrid>
      {items.map(item => (
        <MediaItem item={item} />
      ))}
    </StyledGrid>
  );
};

export default InstaGrid;


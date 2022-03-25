import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { PhotoModel } from '../../models';
import { collectionsByIdsSelector } from '../../redux/selectors/CollectionsSelector';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface ImageInterface {
  data: PhotoModel;
}

export default ({ data }: ImageInterface): React.ReactElement => {
  const collectionIds = (data && data.collections) ?? [];
  const selectedCollections = useSelector(
    collectionsByIdsSelector(collectionIds)
  );

  return (
    <Card>
      <CardMedia
        style={{ maxHeight: '70vh' }}
        component="img"
        image={data.img}
        alt={data.title}
      />
      <CardContent>
        <Stack direction={{ xs: 'row' }} spacing={{ xs: 1 }}>
          {selectedCollections.map((item, idx) => (
            <Button
              component={Link}
              to={`/collection/${item.id}`}
              key={idx}
              size="small"
              variant="outlined"
            >
              {item.name}
            </Button>
          ))}
        </Stack>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

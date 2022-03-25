import * as React from 'react';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CollectionModel, PhotoModel } from '../../models';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ImagesList from '../ImagesList';
import { removeCollectionsAsync } from '../../redux/actions';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface CollectionTabsModel {
  value: string;
  collections: CollectionModel[];
  photos: PhotoModel[];
}

function CollectionsTabs({
  value,
  collections,
  photos,
}: CollectionTabsModel): React.ReactElement {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, indexValue: number) => {
    navigate(`/collection/${indexValue}`);
  };

  const handleDeleteCollections = () => {
    const removeCollections = collections.filter((item) => item.id === value);
    dispatch(removeCollectionsAsync(removeCollections));
    navigate(`/collections`);
  };

  const handleOnClickImage = (title) => {
    navigate(`/photo/${title}`);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          flexGrow: 0,
          overflow: 'visible',
        }}
      >
        {collections.map((item, idx) => (
          <Tab
            key={item.id}
            style={{ whiteSpace: 'nowrap' }}
            value={item.id}
            label={item.name}
            {...a11yProps(item.id)}
          />
        ))}
      </Tabs>
      <Box
        sx={{
          flexGrow: 1,
          padding: '15px',
        }}
      >
        <Box
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={handleDeleteCollections}>
            <DeleteIcon fontSize="small" /> Delete Collection
          </Button>
        </Box>
        <ImagesList data={photos} />
      </Box>
    </Box>
  );
}
export default memo(CollectionsTabs);

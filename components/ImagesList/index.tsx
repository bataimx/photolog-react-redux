import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from 'react-router-dom';
import { PhotoModel } from '../../models';
import { removePhotosAsync } from '../../redux/actions';
import MenuList from '../MenuList';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CollectionsDialog from '../CollectionsDialog';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface DialogModel {
  collection: boolean;
  menuAnchorEl: null | HTMLElement;
  selectedItem: null | PhotoModel;
}

interface ImageListInterface {
  data: PhotoModel[];
}

export default ({ data = [] }: ImageListInterface): React.ReactElement => {
  const dispatch = useDispatch();
  const itemData = data as PhotoModel[];
  let navigate = useNavigate();
  const [dialogState, setDialogState] = useState<DialogModel>({
    collection: false,
    menuAnchorEl: null,
    selectedItem: null,
  });

  const handleOpenMenu = useCallback(
    (target: HTMLElement, item: PhotoModel) => {
      setDialogState((prev) => {
        return {
          ...prev,
          menuAnchorEl: target,
          selectedItem: item,
        };
      });
    },
    []
  );

  const handleCloseMenu = useCallback(() => {
    setDialogState((prev) => {
      return {
        ...prev,
        menuAnchorEl: null,
      };
    });
  }, []);

  const handleOnClick = useCallback((title: string) => {
    navigate(`/photo/${title}`);
  }, []);

  const handleRemovePhoto = useCallback((photo: PhotoModel) => {
    dispatch(removePhotosAsync([photo]));
  }, []);

  const handleCloseCollectionDialog = useCallback(() => {
    setDialogState((prev) => {
      return {
        ...prev,
        collection: false,
      };
    });
  }, []);

  const handleOpenCollections = useCallback(() => {
    setDialogState((prev) => {
      return {
        ...prev,
        collection: true,
        menuAnchorEl: null,
      };
    });
  }, []);

  const menuData = [
    {
      data: {
        text: 'Add To Collections',
        icon: <AddIcon fontSize="small" />,
      },
      onClick: handleOpenCollections,
    },
    {
      data: {
        text: 'Delete Photo',
        icon: <DeleteIcon fontSize="small" />,
      },
      onClick: () => {
        handleRemovePhoto(dialogState.selectedItem);
        handleCloseMenu();
      },
    },
  ];

  return (
    <div>
      <ImageList cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              onClick={() => handleOnClick(item.id)}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
              actionIcon={
                <IconButton
                  onClick={(event) => handleOpenMenu(event.currentTarget, item)}
                  aria-label={`open menu ${item.title}`}
                >
                  <MoreHorizIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <MenuList
        menuAnchorEl={dialogState.menuAnchorEl}
        onClose={handleCloseMenu}
        menuData={menuData}
      />
      <CollectionsDialog
        photo={dialogState.selectedItem}
        open={dialogState.collection}
        onClose={handleCloseCollectionDialog}
      />
    </div>
  );
};

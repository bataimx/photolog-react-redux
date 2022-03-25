import * as React from 'react';
import { useCallback, memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DialogComponent from '../DialogComponent';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { PhotoModel } from '../../models';
import { updatePhotoAsync } from '../../redux/actions';
import {
  collectionsSelector,
  collectionsByIdsSelector,
} from '../../redux/selectors/CollectionsSelector';

interface CollectionDialogModel {
  photo: PhotoModel;
  open: boolean;
  onClose: () => void;
}

function CollectionDialog({
  photo,
  open,
  onClose,
}: CollectionDialogModel): React.ReactElement {
  const dispatch = useDispatch();
  const collections = useSelector(collectionsSelector);
  const [selectValue, setSelectValue] = useState([]);
  const collectionIds = (photo && photo.collections) ?? [];
  const selectedCollections = useSelector(
    collectionsByIdsSelector(collectionIds)
  );

  useEffect(() => {
    setSelectValue(selectedCollections);
  }, [photo]);

  const handleAddCollections = useCallback(() => {
    dispatch(
      updatePhotoAsync({
        ...photo,
        collections: selectValue.map((item) => item.id),
      })
    );
    onClose();
  }, [selectValue]);

  return (
    <DialogComponent
      open={open}
      onClose={onClose}
      title={'Add Collections'}
      buttons={
        <React.Fragment>
          <Button variant="contained" autoFocus onClick={handleAddCollections}>
            Add Collections
          </Button>
          <Button variant="outlined" autoFocus onClick={onClose}>
            Cancel
          </Button>
        </React.Fragment>
      }
    >
      <Autocomplete
        multiple
        value={selectValue}
        onChange={(event: any, newValue: string | null) => {
          setSelectValue(newValue);
        }}
        id="multiple-collections-tags"
        options={collections}
        getOptionLabel={(option) => option && option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Collections"
            placeholder="Food, landscape,..."
          />
        )}
      />
    </DialogComponent>
  );
}
export default memo(CollectionDialog);

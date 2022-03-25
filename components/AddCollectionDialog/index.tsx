import * as React from 'react';
import { useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { CollectionModel } from '../../models';
import { addCollectionsAsync } from '../../redux/actions';
import DialogComponent from '../DialogComponent';

function AddCollectionDialog(): React.ReactElement {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    id: '',
    name: 'dummy title...',
  });

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChangeName = useCallback(
    (e) => {
      const name = e.target.value;
      setForm({ ...form, name });
    },
    [form]
  );

  const handleAddCollection = () => {
    const collectionsPayload: CollectionModel[] = [form];
    dispatch(addCollectionsAsync(collectionsPayload));
    setForm({ ...form, name: 'dummy title...' });
    setOpen(false);
  };

  return (
    <div>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        aria-label="Add"
        color="primary"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <DialogComponent
        open={open}
        onClose={handleClose}
        title={'Add Collection'}
        buttons={
          <React.Fragment>
            <Button variant="contained" autoFocus onClick={handleAddCollection}>
              Add Collection
            </Button>
            <Button variant="outlined" autoFocus onClick={handleClose}>
              Cancel
            </Button>
          </React.Fragment>
        }
      >
        <Stack spacing={2} noValidate autoComplete="off">
          <TextField
            id="collection-title"
            type="text"
            fullWidth
            label="Collection Title"
            variant="standard"
            autoComplete="off"
            onChange={handleChangeName}
          />
        </Stack>
      </DialogComponent>
    </div>
  );
}
export default memo(AddCollectionDialog);

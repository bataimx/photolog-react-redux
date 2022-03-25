import * as React from 'react';
import { useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import UploadButton from '../UploadButton';
import { PhotoModel } from '../../models';
import { addPhotoAsync } from '../../redux/actions';
import DialogComponent from '../DialogComponent';

function PhotoDialog(): React.ReactElement {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({
    title: 'dummy title...',
    author: 'dummy author...',
    img: null,
  });

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChangeTitle = useCallback(
    (e: HTMLElement) => {
      const title = e.target.value;
      setForm({ ...form, title });
    },
    [form]
  );

  const handleChangeAuthor = useCallback(
    (e: HTMLElement) => {
      const author = e.target.value;
      setForm({ ...form, author });
    },
    [form]
  );

  const handleSelectedPhoto = useCallback(
    (file) => {
      setForm((prevState) => {
        return { ...prevState, img: file.base64 };
      });
    },
    [form]
  );

  const handleAddPhoto = () => {
    dispatch(addPhotoAsync(form as PhotoModel));
    setForm({ title: 'dummy title...', author: 'dummy author...', img: null });
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
        title={'Add Photo'}
        buttons={
          <React.Fragment>
            <Button variant="contained" autoFocus onClick={handleAddPhoto}>
              Add Photo
            </Button>
            <Button variant="outlined" autoFocus onClick={handleClose}>
              Cancel
            </Button>
          </React.Fragment>
        }
      >
        <Stack spacing={2} noValidate autoComplete="off">
          <TextField
            id="photo-title"
            type="text"
            fullWidth
            label="Title"
            variant="standard"
            autoComplete="off"
            onChange={handleChangeTitle}
          />
          <TextField
            id="photo-author"
            type="text"
            fullWidth
            label="Author"
            variant="standard"
            autoComplete="off"
            onChange={handleChangeAuthor}
          />
          <UploadButton
            text={'Select Photo'}
            onSelected={handleSelectedPhoto}
          />
        </Stack>
      </DialogComponent>
    </div>
  );
}
export default memo(PhotoDialog);

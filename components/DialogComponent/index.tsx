import * as React from 'react';
import { memo } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './styles';
import BootstrapDialogTitle from './BootstrapDialogTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface DialogComponentModel {
  title: string;
  children?: React.ReactNode;
  buttons: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

function DialogComponent({
  children,
  buttons,
  open,
  onClose,
  title,
}: DialogComponentModel): React.ReactElement {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers className="custom-dialog">
        {children}
      </DialogContent>
      <DialogActions>{buttons}</DialogActions>
    </BootstrapDialog>
  );
}
export default memo(DialogComponent);

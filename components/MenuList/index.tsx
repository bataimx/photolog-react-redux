import * as React from 'react';
import { memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';

interface OptionMenuModel {
  data: any;
  onClick: () => void;
}

interface MenuListModel {
  menuAnchorEl: null | HTMLElement;
  onClose: () => void;
  menuData: OptionMenuModel[];
}

const MenuList = ({
  menuAnchorEl,
  onClose,
  menuData,
}: MenuListModel): React.ReactElement => {
  return (
    <Menu anchorEl={menuAnchorEl} open={!!menuAnchorEl} onClose={onClose}>
      {menuData.map((item, index) => (
        <OptionMenu key={index} data={item.data} onClick={item.onClick} />
      ))}
    </Menu>
  );
};

export function OptionMenu({
  data,
  onClick,
}: OptionMenuModel): React.ReactElement {
  return (
    <MenuItem onClick={onClick}>
      {data.icon ? <ListItemIcon>{data.icon}</ListItemIcon> : ''}
      <ListItemText>{data.text}</ListItemText>
    </MenuItem>
  );
}
export default memo(MenuList);

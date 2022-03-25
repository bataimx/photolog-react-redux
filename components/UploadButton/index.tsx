import * as React from 'react';
import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

interface uploadButtonInterface {
  text: string;
  onSelected: any;
}

export default ({
  text,
  onSelected,
}: uploadButtonInterface): React.ReactElement => {
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);

  const handleChangeImage = useCallback((e) => {
    const file = e.target.files[0];
    getBase64(file).then((resp) => {
      onSelected && typeof onSelected && onSelected(file);
      setFile(file);
      setValue('');
    });
  }, []);

  return (
    <div>
      <div>
        {file && file.base64 ? (
          <img
            style={{ maxWidth: '200px', maxHeight: '200px' }}
            src={file.base64}
            srcSet={file.base64}
            loading="lazy"
          />
        ) : (
          ''
        )}
      </div>
      <label htmlFor="contained-button-file">
        <Input
          style={{ display: 'none' }}
          accept="image/*"
          id="contained-button-file"
          type="file"
          value={value}
          onChange={handleChangeImage}
        />
        <Button variant="contained" component="span">
          {text}
        </Button>
      </label>
    </div>
  );
};

function getBase64(file: any): Promise<any> {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      file.base64 = reader.result;
      resolve(file);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
      reject(error);
    };
  });
}

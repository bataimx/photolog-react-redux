import { PhotoModel } from '../../models';
import { v4 as uuidv4 } from 'uuid';
import { GetJsonPhoto, updateJsonPhoto } from '../../json_photo';
import dummyBase64 from '../../dummyBase64';
import { isEmpty } from 'lodash';

export default function AddPhoto(Photo: PhotoModel): Promise<PhotoModel[]> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      Photo.id = uuidv4();
      if (isEmpty(Photo.img)) {
        Photo.img = dummyBase64;
      }
      const JsonPhoto = GetJsonPhoto();

      JsonPhoto.push(Photo);
      updateJsonPhoto();

      resolve([Photo]);
    }, 400);
  });
}

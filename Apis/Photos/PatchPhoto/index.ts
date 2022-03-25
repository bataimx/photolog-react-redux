import { PhotoModel } from '../../models';
import { updatePhoto, updateJsonPhoto } from '../../json_photo';
import { isEmpty } from 'lodash';

export default function (Photo: PhotoModel): Promise<PhotoModel> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      if (isEmpty(Photo)) {
        return {};
      }

      updatePhoto(Photo);

      resolve(Photo);
    }, 400);
  });
}

import { PhotoModel } from '../../models';
import { GetJsonPhoto, updateJsonPhoto } from '../../json_photo';
import { isEmpty, remove } from 'lodash';

export default function RemovePhotos(
  Photos: PhotoModel[]
): Promise<PhotoModel[]> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      if (isEmpty(Photos)) resolve([]);
      const JsonPhoto = GetJsonPhoto();

      const idList = Photos.map((photo) => photo.id);
      remove(JsonPhoto, (photo) => idList.includes(photo.id));
      updateJsonPhoto();

      resolve(Photos);
    }, 400);
  });
}

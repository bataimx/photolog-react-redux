import { GetJsonPhoto } from '../../json_photo';

export default function GetPhotos(_payload): Promise<any[]> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      const JsonPhoto = GetJsonPhoto();
      resolve(JsonPhoto);
    }, 400);
  });
}

import { GetJsonCollections } from '../../json_collections';

export default function (_payload): Promise<any[]> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      const JsonCollections = GetJsonCollections();
      resolve(JsonCollections);
    }, 400);
  });
}

import { CollectionModel } from '../../models';
import { v4 as uuidv4 } from 'uuid';
import {
  GetJsonCollections,
  updateJsonCollections,
} from '../../json_collections';

export default function (
  collections: CollectionModel[]
): Promise<CollectionModel[]> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      collections.forEach((item) => {
        item.id = uuidv4();
      });
      const CollectionJson = GetJsonCollections();

      CollectionJson.push(...collections);
      updateJsonCollections();

      resolve(collections);
    }, 400);
  });
}

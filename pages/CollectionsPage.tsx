import React from 'react';
import PageContainer from './PageContainer';
import CollectionsTabs from '../components/CollectionsTabs';
import AddCollectionDialog from '../components/AddCollectionDialog';
import { collectionsSelector } from '../redux/selectors/CollectionsSelector';
import { photosByCollectionIdSelector } from '../redux/selectors/PhotoListSelector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

export default (): React.ReactElement => {
  const collections = useSelector(collectionsSelector);
  const { id: collectionId } = useParams();
  const currentVal = collectionId || (collections[0] && collections[0].id) || 0;
  const photos = useSelector(photosByCollectionIdSelector(currentVal));

  return (
    <PageContainer>
      <h1>Collections!</h1>
      {collections.length > 0 && (
        <CollectionsTabs
          value={currentVal}
          collections={collections}
          photos={photos}
        />
      )}
      <AddCollectionDialog />
    </PageContainer>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';
import ImagesList from '../components/ImagesList';
import PageContainer from './PageContainer';
import { PhotoModel } from '../models';
import { photoListSelector } from '../redux/selectors/PhotoListSelector';
import PhotoDialog from '../components/PhotoDialog';

export default (): React.ReactElement => {
  const photoList = useSelector<PhotoModel[]>(photoListSelector);

  return (
    <PageContainer>
      <ImagesList data={photoList} />
      <PhotoDialog />
    </PageContainer>
  );
};

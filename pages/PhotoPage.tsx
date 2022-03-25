import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Image from '../components/Image';
import PageContainer from './PageContainer';
import { PhotoModel } from '../models';
import { photoByIdSelector } from '../redux/selectors/PhotoListSelector';
import { isEmpty } from 'lodash';

function PhotoPage(): React.ReactElement {
  const { id: photoId } = useParams();
  const photoData = useSelector(photoByIdSelector(photoId)) as PhotoModel;

  return (
    <PageContainer>
      <h1>PhotoPage Hello {photoData && photoData.title}!</h1>
      {!isEmpty(photoData) && photoData && <Image data={photoData} />}
    </PageContainer>
  );
}
export default PhotoPage;

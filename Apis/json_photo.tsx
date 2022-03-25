const storageName = 'json_photo';
let JsonPhoto = [];

export function GetJsonPhoto() {
  if (JsonPhoto.length === 0) {
    const jsonStringify = localStorage.getItem(storageName);
    if (!jsonStringify) {
      localStorage.setItem(storageName, JSON.stringify(dummyJson));
      JsonPhoto = dummyJson;
      return JsonPhoto;
    }
    JsonPhoto = JSON.parse(jsonStringify);
  }
  return JsonPhoto;
}

export function updatePhoto(photo) {
  JsonPhoto = JsonPhoto.map((item) => (item.id === photo.id ? photo : item));
  updateJsonPhoto();
}

export function updateJsonPhoto() {
  localStorage.setItem(storageName, JSON.stringify(JsonPhoto));
}

const dummyJson = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    album: '1',
    collections: ['9', '8'],
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    album: '1',
    collections: [],
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    album: '1',
    collections: ['9', '8'],
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    album: '1',
    collections: ['7'],
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    album: '1',
    collections: [],
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    album: '1',
    collections: [],
  },
];

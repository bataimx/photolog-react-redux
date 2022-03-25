const storageName = 'json_collections';
let JsonCollections = [];

export function GetJsonCollections() {
  if (JsonCollections.length === 0) {
    const jsonStringify = localStorage.getItem(storageName);
    if (!jsonStringify) {
      localStorage.setItem(storageName, JSON.stringify(dummyCollections));
      JsonCollections = dummyCollections;
      return JsonCollections;
    }
    JsonCollections = JSON.parse(jsonStringify);
  }
  return JsonCollections;
}

export function updateJsonCollections() {
  localStorage.setItem(storageName, JSON.stringify(JsonCollections));
}

const dummyCollections = [
  {
    id: '9',
    name: 'food',
  },
  {
    id: '8',
    name: 'landscape',
  },
  {
    id: '7',
    name: 'travel',
  },
];

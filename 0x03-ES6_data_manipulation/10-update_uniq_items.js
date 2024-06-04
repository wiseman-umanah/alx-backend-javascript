export default function updateUniqueItems(mapList) {
  mapList.forEach((key, value) => {
    if (key === 1) {
      const temp = value;
      mapList.delete(key);
      mapList.set(temp, 100);
    }
  });
  return mapList;
}

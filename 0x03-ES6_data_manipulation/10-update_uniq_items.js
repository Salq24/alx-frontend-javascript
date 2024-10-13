export default function updateUniqueItems(map) {
  const mList = map;

  if (mList instanceof Map) {
    for (const [key, value] of mList) {
      if (value === 1) {
        mList.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return mList;
}

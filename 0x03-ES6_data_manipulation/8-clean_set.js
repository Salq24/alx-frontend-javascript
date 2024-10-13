export default function cleanSet(set, startString) {
  const mList = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      mList.push(item.slice(startString.length));
    }
  }

  return mList.join('-');
}

export default function createInt8TypedArray(length, position, value) {
  const mArr = new ArrayBuffer(length);
  const mVal = new DataView(arr);

  try {
    mVal.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return mVal;
}

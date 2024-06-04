export default function createInt8TypedArray(len, pos, value) {
  const arr = new ArrayBuffer(len);
  new DataView(arr).setInt8(pos, value);
  return arr;
}

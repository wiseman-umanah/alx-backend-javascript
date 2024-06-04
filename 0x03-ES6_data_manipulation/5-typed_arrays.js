export default function createInt8TypedArray(len, pos, value) {
  if (pos > len - 1) {
    throw new Error('Position outside range');
  }
  const arr = new ArrayBuffer(len);
  const data = new DataView(arr);
  data.setInt8(pos, value);
  return data;
}

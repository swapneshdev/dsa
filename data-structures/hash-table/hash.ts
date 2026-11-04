//  pnpm dev data-structures/hash-table/hash.ts

// AI created
// function rotateLeft(value: number, bits: number): number {
//   return (value << bits) | (value >>> (32 - bits));
// }

// function Hash(input: string, seed: number = 0): number {
//   const bytes = new TextEncoder().encode(input);
//   // return 232323232 //try to create collision due to same hash

//   const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

//   const c1 = 0xcc9e2d51;
//   const c2 = 0x1b873593;

//   let hash = seed >>> 0;

//   // Process complete 4-byte blocks
//   const blockEnd = bytes.length & ~3;

//   for (let i = 0; i < blockEnd; i += 4) {
//     let k = view.getUint32(i, true);

//     k = Math.imul(k, c1);
//     k = rotateLeft(k, 15);
//     k = Math.imul(k, c2);

//     hash ^= k;

//     hash = rotateLeft(hash, 13);
//     hash = (Math.imul(hash, 5) + 0xe6546b64) >>> 0;
//   }

//   // Process remaining bytes (tail)
//   let k = 0;

//   const remaining = bytes.length & 3;

//   if (remaining === 3) {
//     k ^= view.getUint8(blockEnd + 2) << 16;
//   }

//   if (remaining >= 2) {
//     k ^= view.getUint8(blockEnd + 1) << 8;
//   }

//   if (remaining >= 1) {
//     k ^= view.getUint8(blockEnd);

//     k = Math.imul(k, c1);
//     k = rotateLeft(k, 15);
//     k = Math.imul(k, c2);

//     hash ^= k;
//   }

//   // Finalization (avalanche)
//   hash ^= bytes.length;

//   hash ^= hash >>> 16;
//   hash = Math.imul(hash, 0x85ebca6b);

//   hash ^= hash >>> 13;
//   hash = Math.imul(hash, 0xc2b2ae35);

//   hash ^= hash >>> 16;

//   return hash >>> 0;
// }

// export default Hash


import { createHash as Hash } from "node:crypto";

export const CreateHash = (data : string) => {
  const hash = Hash("sha256", {
    outputLength: 32,
  })
    .update(data)
    .digest("hex");

  //   const copiedHash = hash.copy();
  //   console.log("copiedHash", copiedHash);

  return hash;
};
declare function log(n : i32) : void;
// The entry file of your WebAssembly module.
export function minusOne(n: i32): i32 {
  log(n)
  return n - 1;
}
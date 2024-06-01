export default function canIterate(arg) {
  return !!arg && !!arg[Symbol.iterator];
  // return arg?.[Symbol.iterator] instanceof Function; // ESLint против опц.цепочек
}

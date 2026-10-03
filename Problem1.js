function deepEqual(objA, objB) {
  // 1. Same reference or primitive values
  if (objA === objB) return true;

  // 2. Handle null or non-object types (arrays are typeof 'object')
  if (
    objA === null ||
    objB === null ||
    typeof objA !== 'object' ||
    typeof objB !== 'object'
  ) {
    return false;
  }

  // 3. Ensure both are either Arrays or Non-Array Objects
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);
  if (isArrayA !== isArrayB) return false;

  // 4. Compare key length
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  // 5. Recursively compare properties and keys
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}
// Test execution
console.log('Test 1 (Equal):', deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log('Test 2 (Unequal):', deepEqual({ a: 1 }, { a: 2 }));
console.log('Test 3 (Nested):', deepEqual({ x: { y: 1 } }, { x: { y: 1 } }));

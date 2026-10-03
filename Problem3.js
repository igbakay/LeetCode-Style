function deepFreeze(obj) {
  // 1. Handle non-objects and null (primitives can't/don't need to be frozen)
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 2. Retrieve property names (including symbol keys or non-enumerable properties if needed,
  // but Object.getOwnPropertyNames is standard for freezing all own properties)
  const propNames = Reflect.ownKeys(obj);

  // 3. Recursively freeze nested objects before freezing the current object
  for (const name of propNames) {
    const value = obj[name];

    // If property value is an object, recursively freeze it
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  // 4. Freeze the root object itself and return it
  return Object.freeze(obj);
}

// Test case from assignment
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false });

config.api.baseUrl = 'https://changed.com'; // should be ignored
config.debug = true;                        // should be ignored

console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api));       // true
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  // Get all unique top-level keys from both objects
  const allKeys = new Set([
    ...Object.keys(oldObj || {}),
    ...Object.keys(newObj || {}),
  ]);

  for (const key of allKeys) {
    const hasOld = Object.prototype.hasOwnProperty.call(oldObj, key);
    const hasNew = Object.prototype.hasOwnProperty.call(newObj, key);

    if (!hasOld && hasNew) {
      // Key exists in newObj but not oldObj
      added[key] = newObj[key];
    } else if (hasOld && !hasNew) {
      // Key exists in oldObj but not newObj
      removed[key] = oldObj[key];
    } else if (hasOld && hasNew && oldObj[key] !== newObj[key]) {
      // Key exists in both, but values are different
      changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }

  return { added, removed, changed };
}

// Test case
console.log(
  diffObjects(
    { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
    { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
  )
);
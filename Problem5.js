function validateSchema(obj, schema) {
  const errors = [];

  // Iterate over each required key in the schema
  for (const key of Object.keys(schema)) {
    const expectedType = schema[key];
    const hasProperty = Object.prototype.hasOwnProperty.call(obj, key);

    if (!hasProperty) {
      errors.push(`${key}: missing property`);
    } else {
      const actualType = typeof obj[key];
      if (actualType !== expectedType) {
        errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
      }
    }
  }

  return errors;
}

// Test cases from assignment
const schema = { name: 'string', age: 'number', isAdmin: 'boolean' };

console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema));
// []

console.log(validateSchema({ name: 'Ada', age: '21' }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
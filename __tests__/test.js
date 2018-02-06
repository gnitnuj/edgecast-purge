import edgecast from '../src/index';

describe(`edgecast service`, () => {
  it(`must be of type `, () => {
    const eS = new edgecast(`token`, `customer_id`);
    expect(eS.constructor.name).toBe(`EdgeCastPurge`);
  });
});

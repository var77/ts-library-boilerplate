import { hello } from '../src';

describe('Example test', () => {
  it('Should print right name', async () => {
    const str = hello('Name');
    expect(str).toBe('Hello Name');
  });
});

import { helloWorld } from '@/util';

describe('helloWorld.spec.ts', () => {
  it('Should return valid value', () => {
    expect(helloWorld('hello world')).toBeTruthy();
  });
  it('Should throw error', () => {
    expect(() => helloWorld('INVALID')).toThrow('Invalid key: INVALID.');
  });
});

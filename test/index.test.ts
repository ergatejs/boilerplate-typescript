import { name } from '../src/index';

describe('index.ts', () => {
    test('name', () => {
        expect(name).toBe('typescript-boilerplate');
    });
});

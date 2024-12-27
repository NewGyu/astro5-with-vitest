import { assert, expect, test } from 'vitest';
import { getRamen } from 'src/util';
test('getRamen uses getEntry func internally', async () => {
  const r = await getRamen('ichiran');
  expect(r).not.toBeUndefined();
  expect(r.data.taste).toBe('tonkotsu');
});

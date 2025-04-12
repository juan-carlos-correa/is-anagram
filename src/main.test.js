import { it, expect } from 'vitest';

import { isAnagram } from './main.mjs';

it('returns true for basic anagrams', () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
  expect(isAnagram('evil', 'vile')).toBe(true);
  expect(isAnagram('restful', 'fluster')).toBe(true);
});

it('returns false for non-anagrams', () => {
  expect(isAnagram('hello', 'world')).toBe(false);
  expect(isAnagram('rat', 'car')).toBe(false);
});

it('handles different lengths', () => {
  expect(isAnagram('a', 'aa')).toBe(false);
  expect(isAnagram('abc', 'ab')).toBe(false);
});

it('works with repeated characters', () => {
  expect(isAnagram('aabbcc', 'abcabc')).toBe(true);
  expect(isAnagram('aabbcc', 'aabbc')).toBe(false);
});

it('works with very large inputs', () => {
  const a = 'a'.repeat(1e5);
  const b = 'a'.repeat(1e5);
  expect(isAnagram(a, b)).toBe(true);
});

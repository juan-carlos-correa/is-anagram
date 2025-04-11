# Is Anagram – DSA Practice Challenge

This is a classic DSA interview problem: **check if two strings are anagrams** of each other.

## 📘 Description

Write a function `isAnagram(str1, str2)` that returns `true` if `str1` and `str2` are anagrams of each other, and `false` otherwise.

> Two strings are anagrams if they contain the same characters in the same quantity, but possibly in a different order.

For example:

```js
isAnagram('listen', 'silent') // true
isAnagram('hello', 'world')   // false
isAnagram('evil', 'vile')     // true
isAnagram('fluster', 'restful') // true
isAnagram('aaa', 'aaaa') // false
isAnagram('abc', 'cba') // true
``` 

## 📥 Input

- `s1`: a string (1 ≤ s1.length ≤ 10⁵)
- `s2`: a string (1 ≤ s2.length ≤ 10⁵)
- No spaces, only lowercase letters

---

## 📤 Output

- Returns `true` or `false`

## 💡 Tips

- Think about how to compare the character frequency of both strings efficiently.
- Use a frequency counter to track character counts.
- Avoid sorting to achieve O(n) time complexity.

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

Make sure your implementation is in `src/main.js` and your tests in `test/main.test.js`.

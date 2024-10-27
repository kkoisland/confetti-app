// lodash-example.ts

import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];

// Lodashのmap関数を使用して各要素を2倍にする
const doubled = _.map(numbers, (num) => num * 2);
console.log('Doubled:', doubled); // 出力: [2, 4, 6, 8, 10]

// Lodashのfilter関数を使用して偶数だけを抽出する
const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // 出力: [2, 4]

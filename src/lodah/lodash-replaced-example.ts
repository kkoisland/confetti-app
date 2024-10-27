// lodash-replaced-example.ts

import { map } from './map';
import { filter } from './filter';

const numbers = [1, 2, 3, 4, 5];

// 自作のmap関数を使用して各要素を2倍にする
const doubled = map(numbers, (num) => num * 2);
console.log('Doubled:', doubled); // 出力: [2, 4, 6, 8, 10]

// 自作のfilter関数を使用して偶数だけを抽出する
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // 出力: [2, 4]

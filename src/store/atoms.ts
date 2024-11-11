// import { atom } from 'jotai';

// export const quantityAtom = atom(0); // 初期値 0

import { atomWithStorage } from 'jotai/utils';

export const quantityAtom = atomWithStorage('quantity', 0);

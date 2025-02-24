// ランダムな色を生成する関数
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'; // 16進数の数字とアルファベット
  let color = '#'; // 生成される色の先頭には "#" をつける
  for (let i = 0; i < 6; i++) {
    // lettersからランダムに1文字を選び、colorに追加
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; // 生成されたランダムな色を返す
};

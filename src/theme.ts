import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#8B5E3C', // メインのブラウン
    colorSuccess: '#6B8E23', // 成功時のオリーブグリーン
    colorWarning: '#D2B48C', // 警告のベージュ
    colorError: '#A0522D', // エラー時の赤みブラウン
    colorText: '#5C4033', // ダークチョコレート（文字色）
    colorBgBase: '#FDF6EE', // 背景はやさしいアイボリー
    borderRadius: 8, // やわらかさを出す角丸
    // fontFamily: `'Noto Sans JP', 'Roboto', sans-serif`, // 読みやすさ優先
  },
};

export default theme;

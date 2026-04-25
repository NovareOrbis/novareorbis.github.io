import { Home } from "../pages/Home";
import { CharacterCount } from "../pages/CharacterCount";
import { HalfToFull } from "../pages/HalfToFull";
import { FullToHalf } from "../pages/FullToHalf";

export const pages = {
  home: {
    path: "/",
    component: Home,
    title: "Text Flow",
    description: "テキストを編集するためのオンラインツール",
  },
  characterCount: {
    path: "/character-count",
    component: CharacterCount,
    title: "文字数カウント",
    description: "文書を入力または貼り付けることで、文字数をリアルタイムにカウントする。",
  },
  halfToFull: {
    path: "/half-to-full",
    component: HalfToFull,
    title: "半角から全角に変換",
    description: "文書を入力または貼り付けることで、半角文字を全角文字に変換する。",
  },
  fullToHalf: {
    path: "/full-to-half",
    component: FullToHalf,
    title: "全角から半角に変換",
    description: "文書を入力または貼り付けることで、全角文字を半角文字に変換する。",
  }
} as const;

export type TagColor =
  | 'green'
  | 'blue'
  | 'pink'
  | 'orange'
  | 'indigo'
  | 'slate'
  | 'purple'
  | 'yellow'
  | 'teal'

export interface Tool {
  id: string
  emoji: string
  name: string
  description: string
  href: string
  tags: { label: string; color: TagColor }[]
  isNew?: boolean
  isUpdated?: boolean
  updateNote?: { request: string; change: string }
}

export interface Category {
  id: string
  name: string
  description: string
  tools: Tool[]
}

export const categories: Category[] = [
  {
    id: 'business',
    name: 'ビジネス',
    description: 'ビジネスや業務効率化に関するツール',
    tools: [
      {
        id: 'calculator',
        emoji: 'https://www.google.com/s2/favicons?domain=www.wolframalpha.com&sz=128',
        name: '計算機（WolframAlpha）',
        description: '何百万人もの学生やプロフェッショナルに信頼されているWolframの画期的なテクノロジーと知識ベースを使って答を計算します．数学，科学，栄養学，歴史，地理，工学，言語学，スポーツ，金融，音楽等のトピックが扱えます',
        href: 'https://www.wolframalpha.com/',
        tags: [
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'qr-code',
        emoji: 'https://www.google.com/s2/favicons?domain=qr.quel.jp&sz=128',
        name: 'QR作成（QRのススメ）',
        description: 'QRコードを無料で安全に作成するなら、20年以上の信頼と実績のあるこのサイトです。ユーザー登録不要で、商用利用も無制限・無期限です。メール起動やアドレス帳登録用など幅広いタイプもあります。',
        href: 'https://qr.quel.jp/',
        tags: [
          { label: 'ビジネス', color: 'blue' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'pdf-edit',
        emoji: 'https://www.google.com/s2/favicons?domain=www.ilovepdf.com&sz=128',
        name: 'PDF編集（iLovePDF）',
        description: 'iLovePDFは完全無料のPDFの為のオンラインサービス。使い方はとても簡単。PDFの結合、分割、圧縮、officeファイルのPDF変換、PDFからJPGへの変換など他にも多くの機能があります！',
        href: 'https://www.ilovepdf.com/ja',
        tags: [
          { label: 'ドキュメント', color: 'indigo' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'google-translate',
        emoji: 'https://www.google.com/s2/favicons?domain=translate.google.co.jp&sz=128',
        name: '翻訳サービス（Google翻訳）',
        description: '単語、フレーズ、ウェブページを日本語から 100 以上の他言語にすぐに翻訳できる Google の無料サービスです。',
        href: 'https://translate.google.co.jp/?sl=ja&tl=en&op=translate',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'gigafile',
        emoji: 'https://www.google.com/s2/favicons?domain=gigafile.nu&sz=128',
        name: 'ファイル転送（ギガファイル便）',
        description: '無料大容量 ファイル転送サービス GigaFile（ギガファイル）便！「３日～１００日」選べる７種類のファイルの保持期限に加え、１ファイル300Gまでアップロード、共有可能！もちろん容量無制限でアンチウイルス装備。会員登録も不要です。',
        href: 'https://gigafile.nu/',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'diagrams-net',
        emoji: 'https://www.google.com/s2/favicons?domain=app.diagrams.net&sz=128',
        name: '図作成（diagrams.net）',
        description: 'draw.io is free online diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams',
        href: 'https://app.diagrams.net/',
        tags: [{ label: 'ビジネス', color: 'blue' }, { label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'google-maps',
        emoji: 'https://www.google.com/s2/favicons?domain=www.google.com&sz=128',
        name: '地図検索（Googleマップ）',
        description: 'Google マップで地図を検索。乗換案内、路線図、ドライブルート、ストリートビューも。見やすい地図でお店やサービス、地域の情報を検索できます。世界地図も日本語で、旅のプランにも便利。',
        href: 'https://www.google.com/maps',
        tags: [{ label: 'ビジネス', color: 'blue' }, { label: 'その他', color: 'purple' }],
      },
      {
        id: 'transit',
        emoji: 'https://www.google.com/s2/favicons?domain=transit.yahoo.co.jp&sz=128',
        name: '乗り換え',
        description: 'Yahoo!路線情報：全国の路線や高速バス、路線バス、飛行機の乗り換え案内サービスです。始発・終電検索、JR・地下鉄・私鉄の定期代検索、新幹線・電車の運行情報、時刻表、主要空港のフライト情報も提供中。',
        href: 'https://transit.yahoo.co.jp/',
        tags: [{ label: 'ビジネス', color: 'blue' }, { label: 'その他', color: 'purple' }],
      },
      {
        id: 'str-counter',
        emoji: 'https://www.google.com/s2/favicons?domain=www.luft.co.jp&sz=128',
        name: '文字数カウント',
        description: '文字数をリアルタイムにカウント（チェック）します。半角英語や、改行・空白を除いた文字数など幅広い条件で文字数を数えます。',
        href: 'https://www.luft.co.jp/cgi/str_counter.php',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'web-timer',
        emoji: 'https://www.google.com/s2/favicons?domain=timer.onl.jp&sz=128',
        name: 'タイマー',
        description: 'Webでタイマーを表示するサイトです。タイマーはブラウザを閉じても動作します。',
        href: 'https://timer.onl.jp/',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'AIを活用した便利なツール',
    tools: [
      {
        id: 'chatgpt',
        emoji: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128',
        name: 'ChatGPT',
        description: 'ChatGPT は毎日使用できる AI チャットボットです。最も高度な AI とチャットすることで、アイデア探し、問題解決、スピーディーな学びが可能になります。',
        href: 'https://chatgpt.com/',
        tags: [{ label: 'AI', color: 'green' }],
      },

    ],
  },
  {
    id: 'creative',
    name: 'クリエイティブ',
    description: '画像編集やデザイン関連のツール',
    tools: [
      {
        id: 'piskel',
        emoji: 'https://www.google.com/s2/favicons?domain=www.piskelapp.com&sz=128',
        name: 'Piskel',
        description: 'Piskel, free online sprite editor. A simple web-based tool for Spriting and Pixel art. Create pixel art, game sprites and animated GIFs. Free and open-source.',
        href: 'https://www.piskelapp.com/p/create/sprite/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: '123apps',
        emoji: 'https://www.google.com/s2/favicons?domain=123apps.com&sz=128',
        name: '123apps',
        description: '123appsによるWebアプリ - 編集、変換、作成',
        href: 'https://123apps.com/ja/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'photopea',
        emoji: 'https://www.google.com/s2/favicons?domain=www.photopea.com&sz=128',
        name: 'Photopea',
        description: 'Photopea Online Photo Editor lets you edit photos, apply effects, filters, add text, crop or resize pictures. Do Online Photo Editing in your browser for free!',
        href: 'https://www.photopea.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'iloveimg',
        emoji: 'https://www.google.com/s2/favicons?domain=www.iloveimg.com&sz=128',
        name: 'iLoveIMG',
        description: 'iLoveIMGは、使いやすくて完全無料の画像処理用オンラインサービスです。画像の圧縮、サイズ変更、切り抜き、変換などが可能です！',
        href: 'https://www.iloveimg.com/ja',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'photoroom',
        emoji: 'https://www.google.com/s2/favicons?domain=www.photoroom.com&sz=128',
        name: 'Photoroom (背景削除)',
        description: 'AI搭載の自動背景リムーバーは、瞬時に背景画像の削除と変更が可能です。登録不要で利用できますので今すぐ使ってみましょう。',
        href: 'https://www.photoroom.com/ja/tools/background-remover',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'colordic',
        emoji: 'https://www.google.com/s2/favicons?domain=www.colordic.org&sz=128',
        name: '色取得（原色大辞典）',
        description: '色の名前とカラーコードが一目でわかるWEB色見本',
        href: 'https://www.colordic.org/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
    ],
  },
  {
    id: 'materials',
    name: '素材',
    description: 'フリー素材などのサイトまとめ',
    tools: [
      {
        id: 'dova-s',
        emoji: 'https://www.google.com/s2/favicons?domain=dova-s.jp&sz=128',
        name: 'BGM',
        description: 'フリーBGM音楽素材を無料ダウンロード配布しています。商用や非商用など、用途を問わず連絡不要でご自由にご利用頂けます。[配信BGM素材数 18769曲／SE素材数 1302音 2026/3/15現在]',
        href: 'https://dova-s.jp/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'soundeffect-lab',
        emoji: 'https://www.google.com/s2/favicons?domain=soundeffect-lab.info&sz=128',
        name: 'SE',
        description: '2,000音以上の音源を掲載したフリー効果音サイト。品質にこだわっており、テレビなどのプロの音響現場でも使われています。',
        href: 'https://soundeffect-lab.info/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'icooon-mono',
        emoji: 'https://www.google.com/s2/favicons?domain=icooon-mono.com&sz=128',
        name: 'icon',
        description: '6000個以上のアイコン素材を無料でダウンロードできるサイト ICOOON MONO',
        href: 'https://icooon-mono.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'google-fonts',
        emoji: 'https://www.google.com/s2/favicons?domain=fonts.google.com&sz=128',
        name: 'font',
        description: 'Making the web more beautiful, fast, and open through great typography',
        href: 'https://fonts.google.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'pipoya',
        emoji: 'https://www.google.com/s2/favicons?domain=pipoya.net&sz=128',
        name: 'ドット絵',
        description: 'はじめに',
        href: 'https://pipoya.net/sozai/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
    ],
  },
  {
    id: 'government',
    name: '政府・行政',
    description: '政府関連のサービス',
    tools: [
      {
        id: 'myna',
        emoji: 'https://www.google.com/s2/favicons?domain=myna.go.jp&sz=128',
        name: 'マイナポータル',
        description: 'マイナポータル',
        href: 'https://myna.go.jp/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'e-tenkyo',
        emoji: 'https://www.google.com/s2/favicons?domain=lp.jpetn.pf.japanpost.jp&sz=128',
        name: 'e転居',
        description: 'e転居',
        href: 'https://lp.jpetn.pf.japanpost.jp/?utm_source=web&utm_medium=link&utm_campaign=jpetn_guide',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'e-tax',
        emoji: 'https://www.google.com/s2/favicons?domain=www.e-tax.nta.go.jp&sz=128',
        name: 'e-Tax',
        description: '国税電子申告・納税システム(e-Tax)の概要や手続の流れ、法令等に規定する事項など、e-Taxを利用して申告、納税及び申請・届出等を行うために必要な情報やe-Taxについてのお知らせを掲載しています。',
        href: 'https://www.e-tax.nta.go.jp/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'eltax',
        emoji: 'https://www.google.com/s2/favicons?domain=www.eltax.lta.go.jp&sz=128',
        name: 'eLTAX',
        description: 'eLTAXとは、地方税ポータルシステムの呼称で、地方税における手続きを、インターネットを利用して電子的に行うシステムです。',
        href: 'https://www.eltax.lta.go.jp/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'e-gov',
        emoji: 'https://www.google.com/s2/favicons?domain=www.e-gov.go.jp&sz=128',
        name: 'e-Gov',
        description: 'e-Gov',
        href: 'https://www.e-gov.go.jp/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'nenkin',
        emoji: 'https://www.google.com/s2/favicons?domain=www.nenkin.go.jp&sz=128',
        name: 'ねんきんネット',
        description: 'ねんきんネット',
        href: 'https://www.nenkin.go.jp/n_net/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'touki',
        emoji: 'https://www.google.com/s2/favicons?domain=www.touki-kyoutaku-online.moj.go.jp&sz=128',
        name: '登記・供託オンライン申請システム',
        description: '登記・供託オンライン申請システムは、不動産登記、商業・法人登記、動産譲渡登記、債権譲渡登記、供託、成年後見登記及び電子公証に関する手続をオンラインにより申請するシステムです。',
        href: 'https://www.touki-kyoutaku-online.moj.go.jp/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
      {
        id: 'gbiz',
        emoji: 'https://www.google.com/s2/favicons?domain=gbiz-id.go.jp&sz=128',
        name: 'gBizID',
        description: 'GビズIDは、１つのID・パスワードで様々な法人向け行政サービスにログインできるサービスです。順次、利用できる行政サービスを拡大していきます。',
        href: 'https://gbiz-id.go.jp/top/',
        tags: [{ label: '政府・行政', color: 'green' }],
      },
    ],
  },

]

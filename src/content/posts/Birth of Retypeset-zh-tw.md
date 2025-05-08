---
title: 標題
published: 2025-04-04
tags:
- 測試
toc: true #是否生成目錄
lang: zh-tw
abbrlink: test
draft: true
---


## 初遇


![_活版印字](https://image.radishzz.cc/birth-of-retypeset/typograph.webp)

幾個月前，我偶然在 V2 刷到[活版印字](https://astro-theme-typography.vercel.app/) 這個主題，簡約的風格直接戳中我的審美。再加上之前的 Hexo 部落格效能太差，我一直想換來著，於是就決定遷移部落格到這個主題。

但上手以後，有強迫症的我發現了不少細節問題，例如：

- 動畫速率不自然
- 頁面跳轉後會快速捲動
- 返回沒有過渡動畫
- 移動端的左右邊距不一致
- 桌面端的部分區域無法滾動

![勻速淡入淡出，略顯生硬](https://image.radishzz.cc/birth-of-retypeset/unnatural-animation-rate.gif)

![行動端的左邊距為四格，右邊距為六格](https://image.radishzz.cc/birth-of-retypeset/different-margins.webp)

不過這些倒是小事。對我來說，最大的問題是主題不支援 i18n 功能。我指的 i18n 不是簡單地更換 UI 語言，而是支援多語言路徑。

i18n 對我來說是必需的。因為我之前發過一篇英文的[三星優化指南](https://radishzz.cc/posts/d88c9984/)，結果收到好幾個 Bro 的私訊感謝，表示文章對他們很有幫助。我覺得這蠻有意義的，所以我打算以後都要發布雙語文章，還能鍛鍊一下英文程度。

## 困境

於是我開始為主題添加 i18n 功能。既然要加，不能只支援中英兩種語言，肯定得支援多種語言。根據 Astro 官方指南，我需要為每種語言新建一個資料夾，這太麻煩了。

![_Astro 官方的 i18n 指南](https://image.radishzz.cc/birth-of-retypeset/astro-i18n-guide.webp)

接著我找到官方推薦的 i18n 插件，都試了一遍，效果都不理想，而且很麻煩。後來刷到一個推特帖子，我發現這個方案不錯，非常巧妙，而且不需要安裝額外的插件。

![_推特 i18n 截圖](https://image.radishzz.cc/birth-of-retypeset/twitter-i18n.webp)

於是我按照這個思路，花了一週時間終於是弄出一套方案。本地測試成功，非常開心。雖然我看不懂 Cursor 是怎麼實現的，但能跑起來就行了。

結果問題就來了。部署網站到 Netlify 時一直報錯，我也看不懂報錯訊息，給 AI 修也修不好。當時覺得心灰意冷，搞了這麼久，還是失敗了…

無奈之下，我想到了向作者 Moeyua 發郵件求助。

![_求助郵件](https://image.radishzz.cc/birth-of-retypeset/mail-to-moeyua.webp)

## 轉折


此時一個念頭突然萌芽。不然我自己搞一個部落格主題？開玩笑，我都沒學過程式碼，算了吧。但想法一旦出現，就在腦海中揮之不去了。在興趣的強烈驅動下，我開始自學網頁三件套，並畫了幾張[草圖](https://www.v2ex.com/t/1100131)。在 V2 發文求助無果之後，毅然開始建立自己想像中的部落格主題。

三個月過去了，也就有了現在你所看到的樣子。

![_Retypeset](https://image.radishzz.cc/birth-of-retypeset/retypeset-en-desktop.webp)

## 細節

你可能會覺得，就這幾個看起來很簡單的頁面，花了三個月？

### 功能

一是因為零基礎。每個功能的實現，我需要研究好久。在主題背後，其實有許多功能上的細節，以 i18n 為例：

- 完整的多語言路徑功能。根路徑"/" 為預設語言，"/en/" 等為更多語言。
- 主題預設六種語言。你可以六種語言拉滿，也可以設定為單語言網站。
- 可以設定每篇文章的語言。
- 網站標題/副標題支援多語言。目前路徑是什麼語言，標題/副標題即顯示什麼語言。
- [Open Graph](https://x.com/radishzz_?t=sGFn6BhNbDmIiHDUR1vU0g&s=09) 支援多語言。
- RSS 訂閱也支援多語言（頁尾位置）。
- 語言切換按鍵沒有使用任何 JavaScript。

### 設計

二是因為視覺風格。你所看到的字體、顏色、排版、圖示、動畫等，都是我精心推敲之後的結果。由於篇幅限制，不適合在此展開介紹。不過我相信，你應該能感受到主題背後，那一股優雅的氣質。以下分享一些設計過程中的草圖：

![初稿](https://image.radishzz.cc/birth-of-retypeset/draft-01.webp)

![標題的排列組合](https://image.radishzz.cc/birth-of-retypeset/draft-04.webp)

![初始佈局](https://image.radishzz.cc/birth-of-retypeset/draft-02.webp)

![嘗試不同配色](https://image.radishzz.cc/birth-of-retypeset/draft-03.webp)

![繪製圖示](https://image.radishzz.cc/birth-of-retypeset/draft-05.webp)

### Webkit

三是因為 Webkit。我有 Macbook Pro、三星 S23U、iPad Mini 6 和 iPhone15 Pro 這幾台裝置。每次網站部署之後，我都會在這幾台裝置上進行測試。

iPhone 上總是會出現一些奇怪的 BUG，例如切換頁面時背景會閃爍? View Transition 期間字體會被裁切？圖示的水平位置跟標題對不齊？換了幾個瀏覽器都是這樣，後來才知道是 iOS 上的 Webkit 瀏覽器引擎的鍋子。

以下圖片皆為慢動作拍攝。

![字體被裁切](https://image.radishzz.cc/birth-of-retypeset/bug-01.gif)

![背景閃爍](https://image.radishzz.cc/birth-of-retypeset/bug-02.gif)

為了解決這些奇怪的問題，我也是花了不少時間，好在最後都完美解決了。如果你在倉庫中搜尋 ios，你可以看到不少註釋，那些就是我的解決辦法。

## 結語

最後說到這裡，有點佩服我自己，我覺得自己老牛逼了哈哈。其實也沒有，我也不是大佬。我只是機緣巧合之下，像遊戲闖關一樣，度過一個個難關，才做出了這麼一款部落格主題。

寫這篇文章也只是為了分享這個主題，以及主題背後的故事與細節。目前如果你喜歡的話，歡迎使用[Retypeset](https://github.com/radishzzz/astro-theme-retypeset) 作為你的部落格。

後續計畫新增一些主題配色，優化一些樣式，加入一些功能，或分享一些經驗？例如：

- 網頁嵌入文字體的最佳實踐
- 純 CSS 實現手風琴動畫的目錄
- 使用 View Transition 實現亮暗主題切換

## 致謝

感謝以下開源專案的幫助：

- [Typography](https://github.com/moeyua/astro-theme-typography) 主題，提供靈感與主題架構 Astro + Typescript + UnoCSS
- [Fuwriu](https://github.com/saicaca/fuwari) 主題，參考閱讀時間、捲軸、燈箱與目錄功能
- [Redefine](Redefine) 主題，參考主題配置格式
- [AstroPaper](https://github.com/satnaing/astro-paper) 主題，參考 View Transition
- [heti](https://github.com/sivan/heti) 赫嗁，提供中文排版樣式增強
- [EarlySummerSerif](https://github.com/GuiWonder/EarlySummerSerif) 初夏明朝字體

以及兩位朋友：

- [Moeyua](https://github.com/moeyua) 原主題作者，提供 PR 與故事的開始
- [Xat](https://github.com/withxat) 熱心老哥，在發文求助兩個月後主動聯繫我，提供 PR 與意見參考

![世上還是好人多啊](https://image.radishzz.cc/birth-of-retypeset/xat-help.webp)

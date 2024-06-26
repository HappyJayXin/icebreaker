# 決策助手

這是一個使用 [Next.js 14](https://nextjs.org/blog/next-14) 和 [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html) 開發的決策助手專案，透過整合 [yesno.wtf API](https://yesno.wtf/api) 提供動態決策支持。此應用使用 [Tailwind CSS](https://tailwindcss.com/docs/installation) 和 [DaisyUI](https://daisyui.com) 進行設計開發，允許用戶根據不同時間段和自定義內容獲得行動建議。

## 開始使用

首先，運行開發服務器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

## 設計和樣式

本項目使用 Tailwind CSS 來進行設計和樣式設定。為了簡化 UI 的使用，引入 Tailwind CSS 的 DaisyUI 套件。

### 使用 DaisyUI

DaisyUI 提供了一系列預先設計好的元件，快速建立美觀的 UI。可在 [DaisyUI 的官方文檔](https://daisyui.com) 中找到所有可用的元件和使用方法。

### 使用 Icon

在專案中使用自定義 Icon 元件來管理 Icon：

```jsx
import Icon from "@/app/[lng]/components/Icon";

<Icon type="close" />;
```

### 使用 Toast

使用了 Redux 來管理 Toast 通知功能，並結合 DaisyUI 的樣式進行顯示：

顯示 Toast

```jsx
import { useDispatch } from "react-redux";
import { showToast } from "@/app/[lng]/components/Toast/toastSlice";
import { MESSAGES } from "@/app/[lng]/components/Toast/data";

const dispatch = useDispatch();

dispatch(showToast(MESSAGES.custom_message));
```

## 其他

如有任何問題或建議，歡迎提出 issue 或 pull request。

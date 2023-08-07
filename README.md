# Bit Internet Speed
インターネット速度を BitBar を通じて、Mac のメニューバーに表示します


## 表示方法

### 事前準備
#### BitBar のインストール
[コチラのサイト](https://formulae.brew.sh/cask/bitbar)から、BitBar のインストールをお願いします。

#### Node インストール
Volta を通じて、Node / npm のインストールを実施

### 実行方法
下記コマンドを実行

```
node_modules更新
$ npm ci

ビルドの実施
$ npm run build

BitBar へ反映
$ BIT_BAR_PATH=BitBarのPluginFolder npm run apply:bitbar
ex) BIT_BAR_PATH=~/Documents/BitBar npm run apply:bitbar
```
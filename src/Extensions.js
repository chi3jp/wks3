import React from 'react';
import './Extensions.css';

const Extensions = () => {
  return (
    <div className="extensions-container">
      <h1>Chrome拡張機能</h1>
      <div className="extension-item">
        <h2 className="extension-title">SideTray</h2>
        <img src="/st.png" alt="SideTray Screenshot" className="extension-screenshot" />
        <p>ブラウザに、ブックマークとは別に一時保存できる拡張機能です。</p>
        <ul>
          <li><strong>ドラッグ可能なフローティングアイコン:</strong> 画面の右上に小さなアイコンが表示され、好きな場所にドラッグ＆ドロップで移動できます。位置は記憶されます。</li>
          <li><strong>クリックでサイドバー表示:</strong> アイコンをクリックすると、保存したページやテキストの一覧がサイドバーに表示されます。Escキーやサイドバーの外側をクリックすれば非表示にできます。</li>
          <li><strong>ページ全体の簡単保存:</strong> Altキーを押しながらアイコンにマウスを近づけるか、クリックするだけで、現在開いているページを保存します。</li>
          <li><strong>選択テキストのハイライト保存:</strong> 保存したいテキストを選択した状態でページを保存すると、その部分だけをハイライトとして保存できます。「後で読みたい」一文やキーワードの記録に便利です。</li>
        </ul>
      </div>
      <div className="extension-item">
        <h2 className="extension-title">Midjourney画像一括ダウンロード</h2>
        <img src="/mj.png" alt="Midjourney Image Downloader Screenshot" className="extension-screenshot" />
        <p>Midjourneyで生成した画像を、まとめて簡単にダウンロードできるChrome拡張機能です。作業効率を大幅にアップさせます。</p>
        <ul>
          <li><strong>一括ダウンロード:</strong> Midjourneyのギャラリーページから、表示されている画像をまとめてダウンロードできます。</li>
          <li><strong>ファイル名自動生成:</strong> プロンプト情報に基づいた分かりやすいファイル名で保存されます。</li>
          <li><strong>シンプルな操作性:</strong> ワンクリックでダウンロードが開始されます。</li>
        </ul>
      </div>
      <div className="cta-section">
        <p>これらの拡張機能は、メルマガ登録者限定で配布しています。</p>
        <a href="https://chi3.substack.com/about" target="_blank" rel="noopener noreferrer" className="cta-button">
          メルマガに登録して拡張機能を入手する
        </a>
      </div>
    </div>
  );
};

export default Extensions;
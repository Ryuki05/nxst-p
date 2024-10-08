import React from 'react';
import Link from 'next/link';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Count from './components/Count';
import './globals.css';

export default function Shoukai() { // コンポーネント名を大文字に変更
  return (
    <div>
      <Header />
      <main>
        <h1>自己紹介</h1>
        <Count />
        <ul>
          <li>
            <Link href="/shoukai/name">
              名前
            </Link>
            <input type="text" value="vvv" />
          </li>
          <li>
            <Link href="/shoukai/hobby">
              趣味
            </Link>
            <input type="text" value="   " />
          </li>
          <li>
            <Link href="/button/">
            <h1>ボタン紹介</h1>
            </Link>
          </li>
        </ul>

      </main>
      <Footer />
    </div>
  );
}

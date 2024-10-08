'use client';
import React from 'react'
import '../globals.css';
const page = () => {
  return (
    <div>
        <h1 className='mb-10'>inputタイプ種類</h1>
        <ul className='flex flex-wrap'>
            <li className='m-5 border border-black'>
              <p>テキスト入力</p>
              <input className='in' type="text" placeholder='Enter your text' />
            </li>
            <li className='m-5 border border-black'>
              <p>パスワード入力</p>
              <input className='in' type="password" placeholder='Enter your password' />
            </li>
            <li className='m-5 border border-black'>
              <p>メールアドレス入力</p>
              <input className='in' type="email" placeholder='Enter your email' />
            </li>
            <li className='m-5 border border-black'>
              <p>数値入力</p>
              <input className='in' type="number" placeholder='Enter your age' min='0' max='100' />
            </li>
            <li className='m-5 border border-black'>
              <p>電話番号入力</p>
              <input className='in' type="tel" placeholder='Enter your phpne number' />
            </li>
            <li className='m-5 border border-black'>
              <p>URL入力</p>
              <input className='in' type="url" placeholder='Enter wevsite URL' />
            </li>
            <li className='m-5 border border-black'>
              <p>検索フィールド</p>
              <input className='in' type="search" placeholder='Search...' />
            </li>
            <li className='m-5 border border-black'>
              <p>カラーピッカー</p>
              <input className='in' type="color" />
            </li>
            <li className='m-5 border border-black'>
              <p>日付</p>
              <input className='in' type="date" />
            </li>
            <li className='m-5 border border-black'>
              <p>時間選択</p>
              <input className='in' type="time" />
            </li>
            <li className='m-5 border border-black'>
              <p>ローカルな日時選択</p>
              <input className='in' type="datetime-local" />
            </li>
            <li className='m-5 border border-black'>
              <p>月選択</p>
              <input className='in' type="month" />
            </li>
            <li className='m-5 border border-black'>
              <p>週選択</p>
              <input className='in' type="week" />
            </li>
            <li className='m-5 border border-black'>
              <p>チェックボックス</p>
              <input className='in' type="checkbox" id='subscribe' />
              <label htmlFor="subscribe">check</label>
            </li>
            <li className='m-5 border border-black'>
              <p>ラジオボタン</p>
              <input type="radio" name='gender' value='male' />mail
              <input type="radio" name='gender' value='female' />female
            </li>
            <li className='m-5 border border-black'>
              <p>スライダ－</p>
              <input className='in' type="range" min={0} max={100} />
            </li>
            <li className='m-5 border border-black'>
              <p>ファイル選択</p>
              <input className='in' type="file" />
            </li>
            <li className='m-5 border border-black'>
              <p>隠しフィールド</p>
              <input className='in' type="hidden" name='userID' value='12345' />
            </li>
            <li className='m-5 border border-black'>
              <p>画像送信</p>
              <input className='in' type="image" src='' alt='submit image' />
            </li>
            <li className='m-5 border border-black'>
              <p>フォームリセット</p>
              <input className='in bg-slate-500 text-white' type="reset" value='Reset' />
            </li>
            <li className='m-5 border border-black'>
              <p>フォーム送信</p>
              <input className='in bg-black text-white' type="submit" />
            </li>
            <li className='m-5 border border-black'>
              <p>通常ボタン</p>
              <button className='in' onClick={() => alert('Button clicked!')}>
                Click
              </button>
            </li>
            <li className='m-5 border border-black'>
              <p>フォーム送信ボタン</p>
              <form action="">
                <button className='in' type='submit'>Submit Form</button>
              </form>
            </li>
            <li className='m-5 border border-black'>
              <p>フォームリセットボタン</p>
              <form action="">
                <button className='in' type='reset'>Reset Form</button>
              </form>
            </li>
        </ul>
    </div>
  )
}

export default page

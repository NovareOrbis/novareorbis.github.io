import { useRef, useState } from 'react';
import '../App.css'
import { pages } from '../data/pageDefinitions'
import { ToolLayout } from '../layouts/ToolLayout'

export const HalfToFull = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [convertedText, setConvertedText] = useState('');

  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  // 半角 → 全角変換関数
  const toFullWidth = (str: string) => {
    return str.replace(/[!-~]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) + 0xFEE0);
    }).replace(/ /g, '　'); // 半角スペース → 全角スペース
  };

  return (
    <ToolLayout>
      <div className="content-space">
        <p>{pages.halfToFull.description}</p>
        <div className='grid-2'>
          <textarea
            ref={ref}
            rows={10}
            onInput={handleInput}
            style={{ overflow: "hidden", resize: "none" }}
            placeholder="ここにテキストを入力または貼り付けてください"
            onChange={(e) => {
              const text = e.target.value;
              setConvertedText(toFullWidth(text));
            }}
          />
          <div className='outline-bg'>
            <p>
              {convertedText}
            </p>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}

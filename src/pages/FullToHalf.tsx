import { useRef, useState } from 'react';
import '../App.css'
import { pages } from '../data/pageDefinitions'
import { ToolLayout } from '../layouts/ToolLayout'

export const FullToHalf = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [convertedText, setConvertedText] = useState('');

  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  // 全角 → 半角変換関数
  const toHalfWidth = (str: string) => {
    return str.replace(/[\uFF01-\uFF5E]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
    }).replace(/　/g, ' '); // 全角スペース → 半角スペース
  };

  return (
    <ToolLayout>
      <div className="content-space">
        <p>{pages.fullToHalf.description}</p>
        <div className='grid-2'>
          <textarea
            ref={ref}
            rows={10}
            onInput={handleInput}
            style={{ overflow: "hidden", resize: "none" }}
            placeholder="ここにテキストを入力または貼り付けてください"
            onChange={(e) => {
              const text = e.target.value;
              setConvertedText(toHalfWidth(text));
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

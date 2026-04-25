import { useRef } from 'react';
import '../App.css'
import { pages } from '../data/pageDefinitions'
import { ToolLayout } from '../layouts/ToolLayout'

export const CharacterCount = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };
  return (
    <ToolLayout>
      <div className="content-space">
        <p>{pages.characterCount.description}</p>
        <div className='grid-2'>
          <textarea
            ref={ref}
            rows={10}
            onInput={handleInput}
            style={{ overflow: "hidden", resize: "none" }}
            placeholder="ここにテキストを入力または貼り付けてください"
            onChange={(e) => {
              const count = e.target.value.length;
              const countElement = document.getElementById("character-count");
              if (countElement) {
                countElement.textContent = `文字数: ${count}`;
              }
            }}
          />
          <div className='outline-bg'>
            <div id="character-count" className="character-count-result">
              文字数: 0
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}

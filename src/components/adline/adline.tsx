import { useEffect, useRef, useState } from 'react'
import HelperBtn from '@/components/helper/helper'
import MdRender from '@/components/mdrender/mdrender'
import style from './adline.module.css'

function AdLine() {
  const [editable, setEdit] = useState(false)
  const adlineDom = useRef(null)
  const [inputText, setInputText] = useState('')

  function changeEditState(e) {
    e.stopPropagation()
    console.log(e)
    setEdit(true)
  }

  function getInput(e) {
    console.log(e.target.textContent)
    setInputText(e.target.textContent)
  }

  useEffect(() => {
    if (editable) {
      adlineDom.current.focus()
    }
  }, [editable])

  return (
    <div className={style.layout}>
      <div className={style.wrapper}>
        <div
          id="test"
          className={style.contentLine}
          suppressContentEditableWarning={true}
          onClick={changeEditState}
          onBlur={() => setEdit(false)}
          onInput={getInput}
          contentEditable={editable}
          ref={adlineDom}
        >
          <MdRender text={inputText}></MdRender>
        </div>
      </div>
      <div className={style.helperLayout}>
        <HelperBtn></HelperBtn>
      </div>
    </div>
  )
}

export default AdLine

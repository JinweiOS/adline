import { useEffect, useRef, useState } from 'react'
import HelperBtn from '@/components/helper/helper'
import style from './adline.module.scss'

function AdLine() {
  const [originCon, setOriginCon] = useState('')

  function handleEdit() {
    setState(true)
  }

  function getInput(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement
    setOriginCon(target.innerText)
  }

  // 状态信息
  const [state, setState] = useState(false)
  const adlineDom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    adlineDom.current!.focus()
  }, [state])

  return (
    <div className={style.layout}>
      <div className={style.wrapper}>
        <div
          id="test"
          className={style.contentLine}
          suppressContentEditableWarning={true}
          onClick={handleEdit}
          onBlur={() => setState(false)}
          // onMouseEnter={() => changeState(State.hover)}
          // onMouseLeave={() => changeState(State.preview)}
          onInput={getInput}
          contentEditable={state}
          ref={adlineDom}
        ></div>
      </div>
      <div className={style.helperLayout}>
        <HelperBtn></HelperBtn>
      </div>
    </div>
  )
}

export default AdLine

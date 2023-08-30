import MarkdownIt from "markdown-it";
import { useEffect, useRef } from "react";
const parser = new MarkdownIt();

function MdRender(props: { text: string }) {
  console.log(props);
  const result = parser.render(props.text);
  const renderHtml = useRef(null)

  useEffect(() => {
    renderHtml.current.innerHTML = result;
  }, [result])
  
  console.log(renderHtml)
  return <div ref={renderHtml}></div>;
}

export default MdRender;

import {useState, useRef} from "react";

const Editor = ({onCreate}) => {
    // 사용자 입력필드 상태관리
    const [content, setContent] = useState("")
    const contentRef = useRef();
    // 추가버튼 클릭시 함수호출
    const onSubmit = () => {
        // 내용 없이 추가 버튼 클릭시 이벤트
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);

        // 초기화
        setContent("")
        console.log(content)
    }


    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    return (
        <div className={'mx-auto py-10 max-w-[1140px]'}>
                <input ref={contentRef} value={content} onChange={onChangeContent} className={'max-w-[800px]'} placeholder={'새로운 todo...'}></input>
                <button onClick={onSubmit} className={'bg-sky-500 text-white px-3 py-1 ml-5 rounded'}>추가</button>
        </div>
    )
}
export default Editor
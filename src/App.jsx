
import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useState, useRef} from "react";

function App() {


    // 임시 데이터
    const mockData = [
        {
            id: 0,
            isDone: false, // 체크 유무
            content : "리액트 공부하기",
            date : new Date().getTime(), // 생성일

        },
        {
            id: 1,
            isDone: false,
            content : "청소하기",
            date : new Date().getTime(),

        },
        {
            id: 2,
            isDone: false,
            content : "장보러 가기",
            date : new Date().getTime(),

        },
    ];
    const idRef = useRef(3);
    // 데이터 저장을 위한 상태 관리 (추가 버튼클릭시 데이터 변경처리 위함)
    const [todos,setTodos] = useState(mockData);

    // 할일(content) 작성시 배열 데이터 추가
    const onCreate = (content) => {
        const newTodo = {
            id : idRef.current++,
            isDone: false,
            content : content,
            date : new Date().getTime(),
        }
        // 원래 데이터에 새로운 데이터 추가
        setTodos([newTodo,...todos])
    }

    // 할일 작성 후 배열 데이터

    // 체크 박스 변경
    const onUpdate = (targetId) => {
        // todos state의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

        // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
        setTodos(
            todos.map((todo)=> todo.id === targetId
            ? {...todo, isDone: !todo.isDone} : todo
            )
        )
    }
    // 삭제하기
    const onDelete = (targetId) => {
        // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
        setTodos(todos.filter((todo)=> todo.id !==targetId))
    }

    return (

    <>
        <Header />
        {/* 자식요소에게 props 전달 */}
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  )
}

export default App

import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // 검색
    // 순회하면서 참인 결과를 반환
    const getFilteredDate = () => {
        if(search === '') {
            return todos;
        }
        // 대소문자 관계없이 검색 결과 처리
        return todos.filter((todo)=> todo.content.toLowerCase().includes(search.toLowerCase()))
    }
    const filteredTodos = getFilteredDate();

    return (
        <div className={'mx-auto py-10 max-w-[1140px]'}>
            <h3>Todo List 🌱</h3>
            <input value={search} onChange={onChangeSearch} className={'border-b'} placeholder={'검색어를 입력하세요'}></input>
            {filteredTodos.map((todo)=> {
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
            })}
        </div>
    )
}
export default List
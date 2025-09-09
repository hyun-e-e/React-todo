const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheck = () => {
        onUpdate(id);
    }
    const onClickDelete = () => {
        onDelete(id);
    }
    return (
        <div className={'flex items-center max-w-[800px] my-5'}>
            <input onChange={onChangeCheck} checked={isDone} type={'checkbox'} className={`pr-3`} />
            <div className={`pr-3 ${isDone ? 'line-through text-gray-500' : ''}`}>{content}</div>
            <div className={'px-3 text-gray-300 text-sm'}>{new Date(date).toLocaleDateString()}</div>
          <button onClick={onClickDelete} className={'bg-sky-200 py-1 px-2 rounded'}>삭제</button>
        </div>
    )
}
export default TodoItem
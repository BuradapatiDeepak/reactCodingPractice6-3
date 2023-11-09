// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const DeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="eachTodo">
      <p className="paragraph">{title}</p>
      <button type="button" className="deleteButton" onClick={DeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    console.log(newTodos);
    setTodos(newTodos);
  }
  const className1 = item.done ? styles.completed : styles.textItem;
  return (
    <div className={styles.todoItem}>
      <span className={className1} onClick={() => handleClick(item.name)}>
        {item.name}
      </span>
      <span>
        <button onClick={() => handleDelete(item)}>X</button>
      </span>
    </div>
  );
}

import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        placeholder="Enter your task..."
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
      <div className={styles.gradientBar}></div>
    </form>
  );
}

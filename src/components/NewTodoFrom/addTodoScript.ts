import { html } from "hono/html";

const addTodo = html`<script>
  async function addTodoListener() {
    const addTodoBtnEl = document.getElementById("add-todo-btn");
    const inputEl = document.getElementById("todo-input");
    const todoEl = document.getElementById("todo-list");
    addTodoBtnEl.addEventListener("click", async () => {
      const todoText = inputEl.value;

      const response = await fetch("/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: todoText }),
      });

      const responseHTML = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(responseHTML, "text/html");

      const resTodoElement = doc.getElementById("res-todo");
      if (resTodoElement) {
        todoEl.appendChild(resTodoElement.cloneNode(true));
      }
      inputEl.value = "";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    addTodoListener();
  });
</script>`;

export default addTodo;

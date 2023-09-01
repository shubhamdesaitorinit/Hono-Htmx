import { html } from "hono/html";

const todoItemScript = html`<script>
  async function deleteTodoListener() {
    const deleteBtnEls = document.querySelectorAll("button[todoId]");

    deleteBtnEls.forEach((el) => {
      el.addEventListener("click", async function () {
        const todoidValue = el.getAttribute("todoid");
        if (el) {
          console.log("callback");
          const response = await fetch("/todo/" + todoidValue, {
            method: "DELETE",
            headers: {},
          });
          if (response.ok) {
            const todoElement = document.getElementById(
              "main-div" + todoidValue
            );
            if (todoElement) {
              todoElement.remove();
            }
          }
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    deleteTodoListener();
  });
</script>`;

export const todoScript = (todoId: any) => {
  return html`<script>
    async function deleteTodoListener() {
      const deleteBtnEl = document.getElementById("delete-button${todoId}");

      deleteBtnEl.addEventListener("click", async function () {
        console.log("callback");
        const response = await fetch("/todo/${todoId}", {
          method: "DELETE",
          headers: {},
        });
        if (response.ok) {
          const todoElement = document.getElementById("main-div${todoId}");
          if (todoElement) {
            todoElement.remove();
          }
        }
      });
    }

    document.addEventListener("DOMContentLoaded", function () {
      deleteTodoListener();
    });
  </script>`;
};

export default todoItemScript;

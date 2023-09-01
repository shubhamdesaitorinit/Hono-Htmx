import addTodo from "./addTodoScript";

export const NewTodoForm = () => (
  <div class="m-0 p-0 flex w-full  gap-2">
    {addTodo}
    <div class=" w-3/5">
      <input
        aria-label="Create-Todo"
        id="todo-input"
        placeholder="Todo.."
        name="name"
        type="text"
        class="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
      />
    </div>
    <button
      id="add-todo-btn"
      class="w-2/5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg m-[4px] p-0 text-center"
      type="submit"
    >
      Add todo
    </button>
  </div>
);

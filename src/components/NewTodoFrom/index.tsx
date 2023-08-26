export const NewTodoForm = () => (
  <form
    hx-post="/todo"
    hx-target="#todo"
    hx-swap="beforebegin"
    _="on htmx:afterRequest reset() me"
    class="m-0 p-0 flex w-full  gap-2"
  >
    <div class=" w-3/5">
      <input
        placeholder="Todo.."
        name="name"
        type="text"
        class="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
      />
    </div>
    <button
      class="w-2/5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg m-[4px] p-0 text-center"
      type="submit"
    >
      Add todo
    </button>
  </form>
);

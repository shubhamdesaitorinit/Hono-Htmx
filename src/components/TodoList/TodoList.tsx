import { Todo } from "./types";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div
      id={`todo${todo.id}`}
      class="w-full flex justify-between bg-gray-200 p-2"
    >
      <div class="flex gap-2">
        <input
          hx-patch={`/update/${todo.id}`}
          hx-target={`#todo${todo.id}`}
          hx-swap="outerHTML"
          name={`todo-${todo.id}-checkbox`}
          id={`todo-${todo.id}-checkbox`}
          type="checkbox"
          checked={!!todo.done}
        />
        <p
          class={`${todo.done && "line-through hover:line-through"} self-start`}
        >
          {todo.name}
        </p>
      </div>
      <div class="flex gap-3">
        <button
          hx-get={`/todo/${todo.id}/edit`}
          hx-target={`#vieweditTodoFrom`}
          hx-swap="outerHTML"
          class="bg-slate-500 px-2 rounded-sm"
        >
          Edit
        </button>
        <button
          hx-delete={`/todo/${todo.id}`}
          hx-target={`#todo${todo.id}`}
          hx-swap="outerHTML"
          class="bg-slate-500 px-2 rounded-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const TodoList = ({ projectId, list }: { projectId: number; list: Todo[] }) => {
  return (
    <div class="flex flex-col">
      <div class="flex flex-col gap-3">
        {list?.map((todo: Todo) => {
          return (
            <div class="flex">
              <TodoItem todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

import { Todo } from "./types";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div id={`todo${todo.id}`} class="w-full flex justify-between">
      <div class="flex gap-2">
        <input
          hx-patch={`/update/${todo.id}`}
          hx-target={`#todo${todo.id}`}
          hx-swap="outerHTML"
          name={`todo-${todo.id}-checkbox`}
          id={`todo-${todo.id}-checkbox`}
          type="checkbox"
          checked={!!todo.done}
          aria-label="Complete-Check"
        />
        <span class="self-start text-base ">{todo.name}</span>
      </div>
      <div class="flex gap-3">
        <button
          hx-post={`/todo/${todo.id}/edit`}
          hx-target={`#vieweditTodoFrom`}
          hx-swap="outerHTML"
          class="bg-slate-500 px-2 rounded-sm text-white"
        >
          Edit
        </button>
        <button
          hx-delete={`/todo/${todo.id}`}
          hx-target={`#main-div${todo.id}`}
          hx-swap="outerHTML"
          class="bg-slate-500 px-2 text-white rounded-sm"
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
            <div
              id={`main-div${todo.id}`}
              class="w-full flex justify-between bg-gray-200 p-2"
            >
              <TodoItem todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

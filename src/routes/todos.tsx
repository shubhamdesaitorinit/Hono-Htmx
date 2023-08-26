import { HtmlEscapedString } from "hono/utils/html";
import { ContextType } from "../types";
import { TodoItem } from "../components/TodoList/TodoList";
import { Todo } from "../components/TodoList/types";
import { NewTodoForm } from "../components/NewTodoFrom";

export const CreateTodo = async (c: any) => {
  const { name } = c?.req?.valid("form");
  const id = crypto.randomUUID();
  await c.env.DB.prepare(`INSERT INTO todos(id, name, done) VALUES(?, ?, ?);`)
    .bind(Number(id), name, 0)
    .run();
  const todo = { id: Number(id), name, done: 0 };
  return c.html(<TodoItem todo={todo} />);
};

export const deleteTodo = async (c: any) => {
  const id = c.req.param("id");
  await c.env.DB.prepare(`DELETE FROM todos WHERE id = ?;`).bind(id).run();
  c.status(200);
  return c.body(null);
};

export const UpdateTodoState = async (
  context: ContextType
): Promise<HtmlEscapedString> => {
  const { todoId } = context.req.param();
  console.log({ todoId });
  const data = await context.req.parseBody();
  const todo = (await context.env.DB.prepare(
    "UPDATE todos SET done = ? WHERE id = ? RETURNING *"
  )
    .bind(data[`todo-${todoId}-checkbox`] === "on" ? 1 : 0, todoId)
    .first()) as Todo;

  return <TodoItem todo={todo} />;
};

export const EditTodo = async (
  context: ContextType
): Promise<HtmlEscapedString> => {
  const { todoId } = context.req.param();
  console.log({ todoId });
  const todo = (await context.env.DB.prepare("Select * From todos WHERE id = ?")
    .bind(todoId)
    .first()) as Todo;

  return (
    <form
      action={`/todo/${todo.id}`}
      method="put"
      hx-push-url="true"
      hx-target={`#todo${todo.id}`}
      _="on htmx:afterRequest reset() me"
      class="m-0 p-0 flex w-full  gap-2"
      hx-boost="true"
    >
      <div class=" w-3/5">
        <input
          placeholder="Todo.."
          name="name"
          value={todo.name}
          type="text"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
        />
      </div>
      <button
        class="w-2/5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg m-[4px] p-0 text-center"
        type="submit"
      >
        save
      </button>
    </form>
  );
};

export const UpdateTodo = async (
  context: ContextType
): Promise<HtmlEscapedString> => {
  const { todoId } = context.req.param();
  const data = await context.req.parseBody();
  // TODO validate data.name isn't blank
  const todo = (await context.env.DB.prepare(
    "UPDATE todos SET name = ? WHERE id = ? RETURNING *"
  )
    .bind(data.name, todoId)
    .first()) as Todo;

  return <TodoItem todo={todo} />;
};

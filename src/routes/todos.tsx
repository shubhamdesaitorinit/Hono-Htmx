import { HtmlEscapedString } from "hono/utils/html";
import { ContextType } from "../types";
import { TodoItem } from "../components/TodoList/TodoList";
import { Todo } from "../components/TodoList/types";

export const CreateTodo = async (c: any) => {
  const resBody = await c.req.text();
  const parsedBody = await JSON.parse(resBody);
  const newTod = await c.env.DB.prepare(
    `INSERT INTO todos( name, done) VALUES( ?, ?)  RETURNING *;`
  )

    .bind(parsedBody?.name, 0)
    .run();

  const newTodo = newTod.results[0];
  const data = c.html(
    <div id="res-todo" class="w-full flex justify-between bg-gray-200 p-2">
      <TodoItem todo={newTodo} />
    </div>
  );
  return data;
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
    <div id={`vieweditTodoFrom`}>
      <form
        id={`edit-from${todo.id}`}
        action={`/todo/${todo.id}`}
        method="put"
        hx-target={`#todo${todo.id}`}
        class="m-0 p-0 flex w-full  gap-2"
        hx-boost="true"
        hx-push-url="false"
      >
        <div class=" w-3/5">
          <input
            id="todo-input-edit"
            placeholder="Todo.."
            todo="name"
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
    </div>
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

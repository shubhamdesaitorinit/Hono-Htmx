import TodoList from "../components/TodoList/TodoList";
import { ContextType } from "../types";
import { getTodos } from "../controllers/todos/getTodos";
import { Todo } from "../components/TodoList/types";
import { NewTodoForm } from "../components/NewTodoFrom";
import Header from "../components/Header";

export const Home = async (context: ContextType) => {
  try {
    const { projectId } = context.req.param();
    const todo: Todo[] = await getTodos(context.env.DB);

    return (
      <div>
        <main class="w-full">
          <Header />
          <div class="w-full abosolute t-[56px] flex justify-center p-3 flex-col items-center">
            <div class=" flex flex-col gap-2 w-4/5">
              <span class="bg-gray-800	text-white	p-2 text-center rounded-lg">
                Todo
              </span>
              <NewTodoForm />
              <TodoList projectId={Number(projectId)} list={todo} />
              <div id="todo"></div>
              <div id="vieweditTodoFrom" class="w-1/2"></div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    return <div>{error}Something went wrong</div>;
  }
};

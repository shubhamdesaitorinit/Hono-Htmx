import { Todo } from "../../components/TodoList/types";

export const getTodos = async (
  dbNameSpace: D1Database,
): Promise<Todo[]> => {
  const { results } = await dbNameSpace.prepare("SELECT * from todos").all();

  return results as unknown as Todo[];
};

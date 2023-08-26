import { Hono } from "hono";
import { rootLayout, view } from "../html";
import { AppLayout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import {
  CreateTodo,
  deleteTodo,
  EditTodo,
  UpdateTodo,
  UpdateTodoState,
} from "./routes/todos";
import { Env } from "./types";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono<{ Bindings: Env }>();

const AppLayoutHandler = rootLayout(AppLayout);

app.use("*", AppLayoutHandler);
app.get("/", view(Home));
app.patch("/update/:todoId", view(UpdateTodoState));
app.put("/todo/:todoId", view(UpdateTodo));
app.get("/todo/:todoId/edit", view(EditTodo));

app.post(
  "/todo",
  zValidator(
    "form",
    z.object({
      name: z.string().min(1),
    })
  ),
  CreateTodo
);

app.delete("/todo/:id", deleteTodo);

export default app;

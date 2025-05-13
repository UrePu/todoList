export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

// 추가용 타입 (id, completed 제외)
export type NewTodo = Omit<TodoType, "id" | "completed">;

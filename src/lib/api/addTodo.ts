import type { NewTodo, TodoType } from "@/types/todos";

export const addTodo = async (data: NewTodo): Promise<TodoType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      completed: false,
    }),
  });

  if (!res.ok) throw new Error("데이터 추가 실패");
  return res.json();
};

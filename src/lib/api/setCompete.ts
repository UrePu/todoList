import type { TodoType } from "@/types/todos";

export const setComplete = async (
  id: string,
  completed: boolean
): Promise<TodoType> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  if (!res.ok) throw new Error("완료 상태 업데이트 실패");
  return res.json();
};

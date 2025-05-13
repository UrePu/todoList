import type { TodoType } from "@/types/todos";

export const delTodo = async (id: string): Promise<TodoType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) throw new Error("삭제 실패");
  return res.json(); // json-server는 삭제된 데이터를 그대로 반환함
};

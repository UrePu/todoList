import type { TodoType } from "@/types/todos";

export const getTodos = async (): Promise<TodoType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);

  if (!res.ok) throw new Error("데이터 조회 실패");
  return res.json(); // 배열 반환
};

export const getCompletedTodos = async (): Promise<TodoType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos?completed=true`
  );

  if (!res.ok) throw new Error("데이터 조회 실패");
  return res.json(); // 배열 반환
};

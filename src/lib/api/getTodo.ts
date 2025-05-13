import type { TodoType } from "@/types/todos";

export const getTodos = async (): Promise<TodoType[]> => {
  const res = await fetch("http://localhost:3001/todos");

  if (!res.ok) throw new Error("데이터 조회 실패");
  return res.json(); // 배열 반환
};

export const getCompletedTodos = async (): Promise<TodoType[]> => {
  const res = await fetch("http://localhost:3001/todos?completed=true");

  if (!res.ok) throw new Error("데이터 조회 실패");
  return res.json(); // 배열 반환
};

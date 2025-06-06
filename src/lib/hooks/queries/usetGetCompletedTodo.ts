import { useQuery } from "@tanstack/react-query";
import { getCompletedTodos } from "@/lib/api/getTodos";

export const useGetCompletedTodos = () => {
  return useQuery({
    queryKey: ["todos", "completed"],
    queryFn: getCompletedTodos,
    staleTime: Infinity,
  });
};

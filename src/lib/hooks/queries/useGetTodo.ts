import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/lib/api/getTodos";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

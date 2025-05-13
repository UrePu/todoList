import { setComplete } from "@/lib/api/setCompete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TodoType } from "@/types/todos";

export const useSetComplete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      setComplete(id, completed),

    // 낙관적 업데이트
    onMutate: async ({ id, completed }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<TodoType[]>(["todos"]);

      // 낙관적 업데이트 적용
      queryClient.setQueryData<TodoType[]>(["todos"], (old) =>
        old?.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
      );

      return { previousTodos };
    },

    // 실패하면 롤백
    onError: (_err, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    },

    // 성공하거나 실패하든 리페치
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.refetchQueries({ queryKey: ["todos"] });
    },
  });
};

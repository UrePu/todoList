"use client";

import { useGetTodos } from "@/lib/hooks/queries/useGetTodo";
import { useSetComplete } from "@/lib/hooks/mutations/useSetComplete";
import { useDeleteTodo } from "@/lib/hooks/mutations/useDeleteTodo";
import ButtonCommon from "./common/ButtonCommon";
import Loading from "@/app/loading";

const ViewTable = () => {
  const getTodo = useGetTodos();
  const setComplete = useSetComplete();
  const deleteTodo = useDeleteTodo();

  const { data, isPending: isFetching, isError } = getTodo;
  const { mutate: setCompleteMutate } = setComplete;
  const { mutate: deleteMutate, isPending: isDeleting } = deleteTodo;

  const isAnyLoading = isFetching || isDeleting;

  if (isAnyLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const handleClick = (id: string, complete: boolean) => {
    setCompleteMutate({ id, completed: !complete });
  };

  const handleDelete = (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deleteMutate(id);
    }
  };

  return (
    <div className="w-[80%]">
      {data?.map((todo) => (
        <div
          key={todo.id}
          className="flex  justify-between items-center border-b-2 border-gray-300 py-2 gap-2"
        >
          <div>{todo.title}</div>
          <div className="flex  gap-2">
            <ButtonCommon
              onClick={() => handleClick(todo.id, todo.completed)}
              completed={todo.completed}
            >
              {todo.completed ? "완료" : "미완료"}
            </ButtonCommon>
            <ButtonCommon
              onClick={() => handleDelete(todo.id)}
              completed={false}
            >
              삭제
            </ButtonCommon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewTable;

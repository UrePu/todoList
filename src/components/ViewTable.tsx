"use client";
import { useGetTodos } from "@/lib/hooks/queries/useGetTodo";
import React from "react";
import ButtonCommon from "./common/ButtonCommon";
import { useSetComplete } from "@/lib/hooks/mutations/useSetComplete";
import { useDeleteTodo } from "@/lib/hooks/mutations/useDeleteTodo";
import Loading from "@/app/loading";

const ViewTable = () => {
  const getTodo = useGetTodos();
  const mutate = useSetComplete();
  const deletemutate = useDeleteTodo();
  const { data, isPending, isError } = getTodo;

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  const handleClick = (id: string, complete: boolean) => {
    mutate.mutate({ id, completed: !complete });
  };
  const handleDelete = (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deletemutate.mutate(id);
    }
  };

  return (
    <div>
      {data?.map((todo) => (
        <div
          className="flex w-[50%] justify-between items-center border-b-2 border-gray-300 py-2 gap-2"
          key={todo.id}
        >
          <div className="flex ">{todo.title}</div>
          <div className="flex gap-2">
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

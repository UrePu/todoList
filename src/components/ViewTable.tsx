"use client";
import { useGetTodos } from "@/lib/hooks/queries/useGetTodo";
import React from "react";
import ButtonCommon from "./common/ButtonCommon";
import { useSetComplete } from "@/lib/hooks/mutations/useSetComplete";

const ViewTable = () => {
  const getTodo = useGetTodos();
  const mutate = useSetComplete();
  const { data, isPending, isError } = getTodo;

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  const handleClick = (id: string, complete: boolean) => {
    mutate.mutate({ id, completed: !complete });
  };

  return (
    <div>
      {data?.map((todo) => (
        <div
          className="flex w-[50%] justify-between items-center border-b-2 border-gray-300 py-2 gap-2"
          key={todo.id}
        >
          <div className="flex ">{todo.title}</div>
          <ButtonCommon
            onClick={() => handleClick(todo.id, todo.completed)}
            completed={todo.completed}
          >
            {todo.completed ? "완료" : "미완료"}
          </ButtonCommon>
        </div>
      ))}
    </div>
  );
};

export default ViewTable;

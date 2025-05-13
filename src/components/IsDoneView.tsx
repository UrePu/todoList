"use client";
import Loading from "@/app/loading";
import { useGetCompletedTodos } from "@/lib/hooks/queries/usetGetCompletedTodo";
import React from "react";

const IsDoneView = () => {
  const getTodo = useGetCompletedTodos();
  const { data, isPending, isError } = getTodo;

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {data?.map((todo, idx) => (
        <div
          className="flex w-[80%] justify-start items-center border-b-2 border-gray-300 py-2 gap-2"
          key={todo.id}
        >
          {idx + 1}.<div className="flex ">{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default IsDoneView;

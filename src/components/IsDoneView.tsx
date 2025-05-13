"use client";

import Loading from "@/app/loading";
import { useGetCompletedTodos } from "@/lib/hooks/queries/usetGetCompletedTodo";
import React from "react";

const IsDoneView = () => {
  const { data, isPending, isError } = useGetCompletedTodos();

  if (isPending) return <Loading />;
  if (isError) return <div>Error occurred while fetching data.</div>;

  return (
    <section
      aria-label="완료된 할 일 목록"
      className="w-[95%] flex flex-col items-center justify-center md:w-[80%]"
    >
      <h2 className="sr-only">완료된 할 일 목록</h2>
      <ul className="w-full">
        {data?.map((todo, idx) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 border-b-2 border-gray-300 py-2"
          >
            <span className="font-medium">{idx + 1}.</span>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IsDoneView;

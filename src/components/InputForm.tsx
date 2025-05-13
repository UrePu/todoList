"use client";

import React from "react";
import ButtonCommon from "./common/ButtonCommon";
import { useAddTodo } from "@/lib/hooks/mutations/useAddTodo";
import Loading from "@/app/loading";

const InputForm = () => {
  const [text, setText] = React.useState<string>("");
  const { mutate, isPending } = useAddTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please enter a TO-DO item.");
      return;
    }
    mutate({ title: text });
    setText("");
  };

  if (isPending) return <Loading />;

  return (
    <section
      aria-label="할 일 입력 폼"
      className="w-full flex justify-center mt-4"
    >
      <form onSubmit={handleSubmit} className="flex w-[80%] gap-4">
        <label htmlFor="todoInput" className="sr-only">
          할 일 입력
        </label>
        <input
          id="todoInput"
          type="text"
          className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your TO-DO here"
          value={text}
          onChange={handleChange}
        />
        <ButtonCommon type="submit">입력</ButtonCommon>
      </form>
    </section>
  );
};

export default InputForm;

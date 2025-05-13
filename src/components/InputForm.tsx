"use client";
import React from "react";
import ButtonCommon from "./common/ButtonCommon";
import { useAddTodo } from "@/lib/hooks/mutations/useAddTodo";

const InputForm = () => {
  const [text, setText] = React.useState<string>("");
  const addTodoMutation = useAddTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    if (text.trim() === "") {
      alert("Please enter a TO-DO item.");
      return;
    }
    addTodoMutation.mutate({ title: text });
    setText("");
  };
  return (
    <div className="flex w-[50%] gap-4">
      <input
        type="text"
        className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your TO-DO here"
        value={text}
        onChange={handleChange}
      />
      <ButtonCommon onClick={handleClick}>입력</ButtonCommon>
    </div>
  );
};

export default InputForm;

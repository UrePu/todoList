import IsDoneView from "@/components/IsDoneView";
import { getCompletedTodos } from "@/lib/api/getTodos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const IsDone = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getCompletedTodos(),
    staleTime: Infinity,
  });
  await new Promise((res) => setTimeout(res, 2000));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>완료한 일 목록</h1>
        <IsDoneView />
      </div>
    </HydrationBoundary>
  );
};

export default IsDone;

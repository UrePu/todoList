import InputForm from "@/components/InputForm";
import ViewTable from "@/components/ViewTable";
import { getTodos } from "@/lib/api/getTodos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full flex flex-col justify-center">
        <InputForm />
        <ViewTable />
      </div>
    </HydrationBoundary>
  );
};
export default Home;

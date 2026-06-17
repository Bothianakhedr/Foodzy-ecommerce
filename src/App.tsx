import { RouterProvider } from "react-router-dom";
import { router } from "./admin-dashboard/routes/routes";
import { TooltipProvider } from "./components/ui/tooltip";
import { ToastContainer } from "react-toastify";
import { store } from "./admin-dashboard/app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </QueryClientProvider>
        <ToastContainer />
      </TooltipProvider>
    </>
  );
}

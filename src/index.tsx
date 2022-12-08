import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
// import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <RouterProvider router={router} />
      {/* </BrowserRouter> */}
    </QueryClientProvider>
  </React.StrictMode>
);

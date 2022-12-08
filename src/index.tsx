import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <App />
      {/* </BrowserRouter> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

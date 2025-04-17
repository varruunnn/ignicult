import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "thirdweb/react"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { client } from "./client"; 
import "./index.css"; 

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider> 
        <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

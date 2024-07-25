import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="min-h-[calc(100vh-120px)] ">
      <Outlet />
      <Toaster />
    </main>
  );
}

export default App;

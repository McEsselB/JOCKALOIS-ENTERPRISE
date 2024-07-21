import "./styles/App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="min-h-[calc(100vh-120px)] ">
      <Outlet />
    </main>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import ToDoForm from "./ToDo";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToastContainer />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App"></div>
    </BrowserRouter>
  );
}

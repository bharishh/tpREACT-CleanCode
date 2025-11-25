import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from "./Todo.jsx";
import ReRender from "./Re-Render.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App t={"EXO 1"} />
    <Todo />
      <ReRender />
  </StrictMode>,
)

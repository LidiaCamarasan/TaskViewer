import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-2",
      name: "Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-3",
      name: "Create a Design System for Enum Workspace.",
      status: "Completted",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-4",
      name: "Create a Design System for Enum Workspace.",
      status: "Done",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-5",
      name: "Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-6",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-7",
      name: "Create a Design System for Enum Workspace.",
      status: "Completted",
      dueDate: new Date(2022, 7, 24),
    },
  ];

  return (
    <div className="general-container">
      <div className="title">Task Manager</div>
      <div className="app-container">
        <TaskViewer data={data} />
      </div>
    </div>
  );
}

export default App;

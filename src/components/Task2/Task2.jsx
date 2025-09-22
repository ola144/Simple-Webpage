import React, { useEffect, useState } from "react";
import "./Task2.css";

const task = [
  {
    title: "Design Homepage",
    description: "Create wireframes and mockups",
    status: "Pending",
    image:
      "https://www.dbswebsite.com/uploads/b2b-web-design-examples-min-1220x718-1.jpg",
  },
  {
    title: "API Integration",
    description: "Connect frontend with backend",
    status: "In Progress",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEfQNfDZ4nuuAyzG7RXMJ9FKk31nFwQJrUQ&s",
  },
  {
    title: "Testing",
    description: "Write unit and integration tests",
    status: "Completed",
    image:
      "https://testgrid.io/blog/wp-content/uploads/2024/10/unit-testing.jpg",
  },
  {
    title: "Deploy",
    description: "Deploy to production server",
    status: "Pending",
    image:
      "https://www.quobyte.com/wp-content/uploads/2023/08/Deploy-anywhere-4.png",
  },
];

const Task2 = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(task);
  }, []);

  return (
    <div className="task2">
      <h1 className="task-header-title">Task Board</h1>
      <div className="task-container">
        {tasks.map((task, index) => (
          <div className="task-card" key={index}>
            <img src={task.image} alt={task.title} className="task-image" />
            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.description}</p>
            <span className={`task-status ${task.status.toLowerCase()}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task2;

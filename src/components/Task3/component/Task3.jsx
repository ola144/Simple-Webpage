import "./Task3.scss";
import { useTheme } from "../hooks/useTheme";

const Task3 = () => {
  const { theme, toggle } = useTheme();
  return (
    <div className="task3">
      <h1>Task 3</h1>

      <article className="card">
        <h3 className="title">SCSS Learning Outcome</h3>
        <p className="meta">
          Variables • Mixins • Partials • Modules • Theming • Nesting
        </p>
        <div className="content">
          This card shows how SCSS can structure design tokens, generate
          reusable utilities, and theme your app with light/dark modes using
          data attributes.
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
          <button>Primary</button>
          <button variant="outline">Outline</button>
          <button block style={{ maxWidth: 160 }}>
            Block
          </button>
        </div>
      </article>
      <button className="button__themeToggle" onClick={toggle}>
        Toggle: {theme === "light" ? "🌞" : "🌙"}
      </button>
    </div>
  );
};

export default Task3;

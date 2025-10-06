import "./Task4Footer.css";

const Task4Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Oladimeji Agbaje — Built with Vite +
          React
        </p>
      </div>
    </footer>
  );
};

export default Task4Footer;

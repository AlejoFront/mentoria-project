import { Link } from "react-router-dom";
import logo from "shared/assets/img/logo.png";
import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className="layout">
      <header className="header">
        <div className="content">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
            <span>Usuarium</span>
          </Link>
        </div>
      </header>
      <section className="wrapper">
        <div className="blur" />
        <div className={className || ""}>{children}</div>
      </section>
    </main>
  );
};

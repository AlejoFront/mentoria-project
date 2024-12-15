import { Link, useLocation } from "react-router-dom";
import logo from "shared/assets/img/logo.png";
import { useAppSelector } from "store";
import { selectAuthInfo } from "store/slices";
import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  const location = useLocation();
  const { isAuthenticated } = useAppSelector(selectAuthInfo);

  const menuItems = {
    admin: [
      { label: "Home", path: "/" },
      { label: "Profile", path: "/profile" },
    ],
    noLoggedIn: [
      { label: "Login", path: "/auth/login" },
      { label: "Register", path: "/auth/register" },
    ],
  };

  const currentMenu = isAuthenticated ? menuItems.admin : menuItems.noLoggedIn;

  return (
    <main className="layout">
      <header className="header">
        <div className="content">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
            <span>Usuarium</span>
          </Link>
          <nav className="menu">
            <ul>
              {currentMenu.map((item) => (
                <li
                  key={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <section className="wrapper">
        <div className="blur" />
        <div className={className || ""}>{children}</div>
      </section>
    </main>
  );
};

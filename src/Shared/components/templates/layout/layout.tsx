import { Link, useLocation } from "react-router-dom";
import logo from "shared/assets/img/logo.png";
import { useAppSelector } from "store";
import { selectAuthInfo } from "store/slices";
import "./layout.scss";
import { useUserPreferences } from "shared/context";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  const location = useLocation();
  const { translate, updatePreferences } = useUserPreferences();
  const { isAuthenticated } = useAppSelector(selectAuthInfo);

  const menuItems = {
    admin: [
      { label: translate("shared.menu.admin.home"), path: "/" },
      { label: translate("shared.menu.admin.profile"), path: "/profile" },
    ],
    noLoggedIn: [
      { label: translate("shared.menu.noLoggedIn.login"), path: "/auth/login" },
      {
        label: translate("shared.menu.noLoggedIn.register"),
        path: "/auth/register",
      },
    ],
  };

  const currentMenu = isAuthenticated ? menuItems.admin : menuItems.noLoggedIn;

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value as "en" | "es";
    updatePreferences({ language: selectedLanguage });
  };

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
              <div className="language-select">
                <label htmlFor="language-selector" className="sr-only">
                  {translate("language.shared.languageSelector.lable")}
                </label>
                <select
                  id="language-selector"
                  onChange={handleLanguageChange}
                  defaultValue={translate("shared.languageSelector.default")}
                >
                  <option value="en">
                    {translate("shared.languageSelector.en")}
                  </option>
                  <option value="es">
                    {translate("shared.languageSelector.es")}
                  </option>
                </select>
              </div>
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

import { Layout } from "shared/components/templates/layout/layout";
import "./404.page.scss";
import { Link } from "react-router-dom";
import { useUserPreferences } from "shared/context";

export const PageNotFound = () => {
  const { translate } = useUserPreferences();

  return (
    <Layout className="page-404">
      <h1>{translate("404.title")}</h1>
      <p>{translate("404.description")}</p>
      <Link to="/">{translate("404.link")}</Link>
    </Layout>
  );
};

export default PageNotFound;

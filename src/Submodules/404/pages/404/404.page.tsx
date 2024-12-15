import { Layout } from "shared/components/templates/layout/layout";
import "./404.page.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "shared/context";

export const PageNotFound = () => {
  const { language } = useLanguage();
  const texts = language["404"];

  return (
    <Layout className="page-404">
      <h1>{texts.title}</h1>
      <p>{texts.description}</p>
      <Link to="/">{texts.link}</Link>
    </Layout>
  );
};

export default PageNotFound;

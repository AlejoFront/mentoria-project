import { Layout } from "shared/components/templates/layout/layout";
import "./404.page.scss";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Layout className="page-404">
      <h1>404</h1>
      <p>Oops... Parece que la página que buscas no existe.</p>
      <Link to="/">Regresar al inicio</Link>
    </Layout>
  );
};

export default PageNotFound;

import { Layout } from "shared/components/templates/layout/layout";
import "./404.page.scss";

export const PageNotFound = () => {
  return (
    <Layout className="page-404">
      <h1>404</h1>
      <p>Oops... Parece que la página que buscas no existe.</p>
      <a href="/">Regresar al inicio</a>
    </Layout>
  );
};

export default PageNotFound;

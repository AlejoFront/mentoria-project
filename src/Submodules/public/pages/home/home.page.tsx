import { Link } from "react-router-dom";
import { Layout } from "shared/components/templates/layout/layout";
import "./home.page.scss";

export const HomePage = () => {
  return (
    <Layout className="home">
      <h1>
        Gestión avanzada para el <span>control total</span>
      </h1>
      <p>
        Accede a tu panel de usuario para gestionar tus preferencias, verificar
        tu historial y mantener el control total en un solo lugar.
      </p>
      <Link to="/auth">Inicia sesión ahora</Link>
    </Layout>
  );
};

export default HomePage;

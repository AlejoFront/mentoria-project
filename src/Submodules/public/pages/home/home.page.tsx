import { Link } from "react-router-dom";
import { Layout } from "shared/components";
import { useUserPreferences } from "shared/context";
import "./home.page.scss";

export const HomePage = () => {
  const { translate } = useUserPreferences();
  
  return (
    <Layout className="home">
      <h1>
        {translate("public.pages.home.title.text1")}{" "}
        <span>{translate("public.pages.home.title.text2")}</span>
      </h1>
      <p>{translate("public.pages.home.description")}</p>
      <Link to="/auth/login">{translate("public.pages.home.button")}</Link>
    </Layout>
  );
};

export default HomePage;

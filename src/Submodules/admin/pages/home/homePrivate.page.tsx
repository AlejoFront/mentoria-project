import { auth } from "config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { Layout } from "shared/components/templates/layout/layout";

export const HomePrivate = () => {
  const onSignOut = async () => {
    await signOut(auth);
  };
  return (
    <Layout>
      <h1>Home Admin</h1>
      <br />
      <Link to={"/profile"}>Profile</Link>
      <button type="button" onClick={() => onSignOut()}>
        Salir
      </button>
    </Layout>
  );
};

export default HomePrivate;

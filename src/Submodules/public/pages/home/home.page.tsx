import { Link } from 'react-router-dom';
import { Layout } from 'shared/components';
import {useLanguage} from 'shared/context';

import './home.page.scss';

export const HomePage = () => {
  const {language} =  useLanguage();
  return (
    <Layout className="home">
      <h1>
        {language.public.pages.home.title.text1} <span>{language.public.pages.home.title.text2}</span>
      </h1>
      <p>{language.public.pages.home.description}</p>
      <Link to="/auth">{language.public.pages.home.button }</Link>
    </Layout>
  );
};

export default HomePage;

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  useEffect,
} from "react";

import en from "shared/locale/en.json";
import es from "shared/locale/es.json";

type Language = "en" | "es";

interface LanguageContextType {
  language: Record<string, any>;
  swtchLanguage: (lng: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const languages = {
  en,
  es,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("lng") as Language) || "es";
  });
  const swtchLanguage = (lng: Language) => setLanguage(lng);

  useEffect(() => {
    localStorage.setItem("lng", language);
  }, [language]);
  return (
    <LanguageContext.Provider
      value={{ language: languages[language], swtchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage mus be used with in a LanguageProvider");
  }
  return context;
};

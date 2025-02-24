import {
    createContext,
    useState,
    useContext,
    ReactNode,
    FC,
    useEffect,
    useMemo,
    useCallback,
  } from "react";

import {languages} from 'shared/locale';


type Preferences = {
    theme: "light" | "dark";
    language:  "en" | "es";
}

type UserPreferencesContextType = {
    preferences: Preferences;
    updatePreferences: (newPreferences: Partial<Preferences>) => void;
    translate: (key: string) => any;
}

const defaultPreferences: Preferences = {
    theme: "light",
    language: "es"
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const storedPreferences = localStorage.getItem("userPreferences");
    return storedPreferences ? JSON.parse(storedPreferences) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  }, [preferences]);

  const updatePreferences = useCallback((newPreferences: Partial<Preferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    localStorage.setItem("userPreferences", JSON.stringify(updatedPreferences));
  }, [preferences]);

  const translate = useCallback((key: string): any => { 
    const keys = key.split(".");
    let translation: any = languages[preferences.language];
  
    for (const k of keys) {
      if (translation[k] === undefined) {
        return key;
      }
      translation = translation[k];
    }
  
    return translation;
  }, [preferences.language]);

  const value = useMemo(() => ({
    preferences,
    updatePreferences,
    translate
  }), [preferences, translate, updatePreferences]);

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error("useUserPreferences must be used within a UserPreferencesProvider");
  }
  return context;
};
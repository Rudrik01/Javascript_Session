import { createContext,useContext,useState,ReactNode } from "react";

interface ThemeContextType{
    theme:string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;  
}


export const ThemeContext=createContext<ThemeContextType | undefined >(
    undefined
);


export const useTheme=()=>{
    const context =useContext(ThemeContext);

    if(context===undefined){
        throw new Error("useTheme must be used within provider");
    }
    return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

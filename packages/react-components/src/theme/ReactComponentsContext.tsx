const { setTheme } = require("bigiron.css");
import React, { useEffect, useRef } from "react";

export type ReactComponentsContextInterface = {
  theme: "light" | "dark";
};

const defaultValue: ReactComponentsContextInterface = {
  theme: "light",
};

const ReactComponentsContext = React.createContext(defaultValue);

export const ReactComponentsTheme: React.FC<{
  theme: "light" | "dark";
  children: any;
}> = ({ theme, children }) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref) {
      setTheme(theme, ref.current);
    }
  }, []);

  return <div ref={ref}>{children}</div>;
};

/**
 * Hook function
 */
export function useTheme() {
  return React.useContext(ReactComponentsContext);
}

export default ReactComponentsContext;

import React from "react";

export type ReactComponentsContextInterface = {
  type: "light" | "dark";
};

const defaultValue: ReactComponentsContextInterface = {
  type: "light",
};

const ReactComponentsContext = React.createContext(defaultValue);

/**
 * Hook function
 */
export function useTheme() {
  return React.useContext(ReactComponentsContext);
}

export default ReactComponentsContext;

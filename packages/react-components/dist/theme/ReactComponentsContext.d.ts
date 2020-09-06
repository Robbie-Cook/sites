import React from "react";
export declare type ReactComponentsContextInterface = {
    type: "light" | "dark";
};
declare const ReactComponentsContext: React.Context<ReactComponentsContextInterface>;
/**
 * Hook function
 */
export declare function useTheme(): ReactComponentsContextInterface;
export default ReactComponentsContext;

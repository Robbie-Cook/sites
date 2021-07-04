import ReactComponentsContext from "../theme/ReactComponentsContext";
import { setTheme } from "bigiron.css";

export default class Template {
  static createTemplate(args: any, component: () => React.FC<any>) {
    return (
      <ReactComponentsContext.Provider
        value={{
          type: args.type,
        }}
      >
        {setTheme(args.type)}
        {component()}
     <ReactComponentsTheme
    );
  }
}

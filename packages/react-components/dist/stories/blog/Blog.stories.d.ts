import { Story, Meta } from "@storybook/react/types-6-0";
import { BlogProps } from "../../blog/Blog";
import { Theme } from "../../theme/Theme";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Dark: Story<BlogProps & Theme>;
export declare const Light: Story<BlogProps & Theme>;

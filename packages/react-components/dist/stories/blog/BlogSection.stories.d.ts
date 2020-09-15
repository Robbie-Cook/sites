import { Story, Meta } from "@storybook/react/types-6-0";
import { BlogSectionProps } from "../../blog/BlogSection";
import { Theme } from "../../theme/Theme";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Dark: Story<BlogSectionProps & Theme>;
export declare const Light: Story<BlogSectionProps & Theme>;

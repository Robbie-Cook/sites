import { Story, Meta } from "@storybook/react/types-6-0";
import { BlogPostProps } from "../../blog/BlogPostShort";
import { Theme } from "../../theme/Theme";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Dark: Story<BlogPostProps & Theme>;
export declare const Short: Story<BlogPostProps & Theme>;
export declare const Light: Story<BlogPostProps & Theme>;

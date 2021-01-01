import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogSection, { BlogSectionProps } from "../../blog/BlogSection";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";
import ReactComponentsContext from "../../theme/ReactComponentsContext";

// @ts-ignore
import TestPost from "./TestPost.md";
import { setTheme } from "bigiron.css";

export default {
  title: "Blog/Blog Section",
  component: BlogSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogSectionProps & Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <BlogSection>{args.children}</BlogSection>
  </ReactComponentsContext.Provider>
);

export const Dark = Template.bind({});
Dark.args = {
  children: (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<h3>Test Title</h3>Urganda la desconocida Si de llegarte a los bue-, libro, fueres con letu-, no te dirá el boquirru- que no pones bien los de-. Mas si el pan no se te cue- por ir a manos de idio-, verás de manos a bo-, aun no dar una en el cla-, si bien se comen las ma- por mostrar que son curio-. Y, pues la expiriencia ense- que el que a buen árbol se arri- buena sombra le cobi-, en Béjar tu buena estre- un árbol real te ofre- que da príncipes por fru-, en el cual floreció un du- que es nuevo Alejandro Ma-: llega a su sombra, que a osa- favorece la fortu-. De un noble hidalgo manche- contarás las aventu-, a quien ociosas letu-, trastornaron la cabe-: damas, armas, caballe-, le provocaron de mo-, que, cual Orlando furio-, templado a lo enamora-, alcanzó a fuerza de bra- a Dulcinea del Tobo-. No indiscretos hieroglí- estampes en el escu-, que, cuando es todo figu-, con ruines puntos se envi-. Si en la dirección te humi-, no dirá, mofante, algu-: ¡Qué don Álvaro de Lu-, qué Anibal el de Carta-,",
      }}
    ></div>
  ),
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children: (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<h3>Test Title</h3>Urganda la desconocida Si de llegarte a los bue-, libro, fueres con letu-, no te dirá el boquirru- que no pones bien los de-. Mas si el pan no se te cue- por ir a manos de idio-, verás de manos a bo-, aun no dar una en el cla-, si bien se comen las ma- por mostrar que son curio-. Y, pues la expiriencia ense- que el que a buen árbol se arri- buena sombra le cobi-, en Béjar tu buena estre- un árbol real te ofre- que da príncipes por fru-, en el cual floreció un du- que es nuevo Alejandro Ma-: llega a su sombra, que a osa- favorece la fortu-. De un noble hidalgo manche- contarás las aventu-, a quien ociosas letu-, trastornaron la cabe-: damas, armas, caballe-, le provocaron de mo-, que, cual Orlando furio-, templado a lo enamora-, alcanzó a fuerza de bra- a Dulcinea del Tobo-. No indiscretos hieroglí- estampes en el escu-, que, cuando es todo figu-, con ruines puntos se envi-. Si en la dirección te humi-, no dirá, mofante, algu-: ¡Qué don Álvaro de Lu-, qué Anibal el de Carta-,",
      }}
    ></div>
  ),
  type: "light",
};

import React from "react";
declare type Props = {
    site: {
        siteTitle: string;
        siteTitleAlt?: string;
        siteUrl: string;
        siteDescription: string;
        siteLanguage: string;
        siteImage: string;
        author: string;
    };
    title?: string;
    description?: string;
    pathname?: string;
    image?: string;
    children?: React.ReactNode;
};
declare const SEO: React.FC<Props>;
export default SEO;

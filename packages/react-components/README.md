# React Components

> Need some components in your React? Here be some.

---

## Examples

```typescript
import { Button } from "@robbie-cook/react-components"

const MyComponent: React.FC = () => {
  return (
    <Button>Hello!</Button>
  )
}
```

### Usage with Gatsby

If you are using this project with Gatsby, just import like so:
```typescript

import {
  Blog,
  Theme,
  ReactComponentsContext,
  H1,
  SEO,
} from "@robbie-cook/react-components";
import "@robbie-cook/react-components/src/styles.scss";
```

> N.B. You should only have to import `styles.css` once in your whole App.

This is because I am having trouble getting `style-loader` to work with Gatsby.

---

## Installation

`npm i @robbie-cook/react-components`

Also, add this to your html file (e.g. public/index.html in Create React App)

```html
<link
  href="https://fonts.googleapis.com/css2?family=Lexend+Peta&family=Vollkorn:ital,wght@0,600;0,700;0,800;0,900;1,700&display=swap"
  rel="stylesheet"
/>
```
## Components

Check out the components here: https://reactcomponents.robbie.digital

---

## Contributing

> To get started, please make an issue, and then I will get back to you with my feedback! Please make an issue before you make a PR, including feature requests.
I would hate to make you do a bunch of work and not be able to merge it in.

## Team

| <a href="https://github.com/Robbie-Cook/" target="_blank">Robbie Cook</a>

---

## Support

Reach out to me at one of the following places!

- robbie@robbie.digital

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 Robbie Cook

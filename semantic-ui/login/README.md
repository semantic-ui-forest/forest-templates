## Semantic-UI templates

This is a template imported from
[Semantic-UI](https://semantic-ui.com/examples/login.html) and
[Semantic-UI-React](https://react.semantic-ui.com/layouts/login).

In includes two versions, one implemented in plain html, the other implemented
by [Semantic-UI-React](https://react.semantic-ui.com/).

Want to try yourself? Make sure that you have [Node.js](https://nodejs.org/en/download/package-manager/) installed, and better to get
[Yarn](https://yarnpkg.com/) installed.

### HTML

```sh
git clone http://github.com/semantic-ui-forest/forest-templates
cd forest-templates/semantic-ui/login/html/
browser-sync start --server --files="**/*"
```

### React

```sh
git clone http://github.com/semantic-ui-forest/forest-templates
cd forest-templates/semantic-ui/login/react/
yarn # npm install
yarn start # npm start
```

Right now, Semantic-UI-React lacks official support for [form validation](https://github.com/Semantic-Org/Semantic-UI-React/issues/678), so this is just
some layout demonstration.

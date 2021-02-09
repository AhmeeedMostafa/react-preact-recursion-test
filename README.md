A test project for debugging an issue of integrating preact with styled-components inside react contains of (preact project as widget `second-widget` integrated inside another preact project as widget `my-widget` integrated inside react project as main application `my-app`).

### The issue producing steps
1. Adding styled-components to preact project & using some styled component inside it.

2. Importing that preact project (as widget) inside a react project.

## Follow the next instructions by order to init the projects:

### Acting as NPM module & Building as widget (Second-widget)  -- second widget --:

- run `cd second-widget`

- run `yarn link`

- run `yarn dist` (run it after every change in the widget for reflecting the changes in dist. build)


### Acting as NPM module, Linking the local second-widget package which acts as NPM module & Building as widget (my-widget) -- first widget --:

- run `cd my-widget`

- run `yarn link`

- run `yarn link second-widget`

- run `yarn dist` (run it after every change in the widget for reflecting the changes in dist. build)

### Run the application

- run `cd my-app`

- run `yarn link my-widget`

- run `yarn`

- run `yarn start`

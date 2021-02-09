Following the next instructions by order:

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

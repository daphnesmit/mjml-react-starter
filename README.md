# mjml-react-starter
Get started with developing emails with React Components. This starter includes dev and build scripts to get you started with 1 command.


## Getting started
Check out the docs of [mjml-react](https://github.com/wix-incubator/mjml-react) on how to develop emails with React Components.


## Development server
Run `yarn dev` in your terminal to start up the development server.

You should see the message: `🚀 Server ready at http://localhost:3000`.

In the folder `./src/templates` you will see an example email template.
You can add multiple templates inside this folder.

Each template should be exported with a unique named export:
```js
export const example = ( 
    // MJML React components here 
)
```

The name of the export gets translated to a url in the dev server.

So if you now navigate to http://localhost:3000/example you will see the example template here.
In `./scripts/dev.ts` you can also change the name of the mail template to be served from the root at http://localhost:3000.

## Build an HTML file
Run `yarn build` in your terminal to start building your HTML email template.

This will generate all your HTML templates and place them in the `./dist` folder
## Linting
Run `yarn lint-fix` in your terminal to start fixing any linting errors.


### Contributing

### Pull requests

Clear, concise pull requests are excellent at continuing the project's community driven growth.  

Please make your commits in logical sections with clear commit messages.  

## License

mjml-react-starter is available under the [MIT license](https://github.com/daphnesmit/mjml-react-starter/blob/main/LICENSE).

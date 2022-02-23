# mjml-react-starter
Get started with developing emails with React Components. This starter includes dev and build scripts to get you started with 1 command.


## Getting started
Check out the docs of [mjml-react](https://github.com/wix-incubator/mjml-react) on how to develop emails with React Components.


### But Daphne? Why mjml-react and not normal mjml?!
Normal mjml can be great for simple templates. If you just need 1 or 2 simple templates this will just be enough for you, really.

But, say you need to make multiple templates that all use shared reusable components or you need theming through a ThemeProvider or such. 
Than this mjml-react-starter is just the tool for you!

Here is an example of where this starter becomes something powerfull for you:
```tsx
import { ThemeProvider, useTheme } from 'styled-components';

interface IMailButton extends HrefProps, Pick<MjmlButtonProps, 'verticalAlign' | 'align'>, ClassNameProps {
  variant?: 'primary' | 'secondary'
  size?: 's' | 'm' | 'l'
}

export const MailButton: React.FC<IMailButton> = ({ children, variant = 'primary', size = 'm', ...props }) => {
  const theme = useTheme() as TitanTheme;

  return (
    <MjmlButton
      padding="0"
      fontFamily={`${theme.components.defaultTextStyles[type].fontFamily}, Arial, Helvetica, sans-serif`}
      backgroundColor={theme.components.button.variants[variant].backgroundColor}
      color={theme.components.button.variants[variant].textColor}
      borderRadius={theme.components.button.borderRadius}
      innerPadding={theme.components.button.sizes[size].padding}
      {...props}
    >
    {children}
    </MjmlButton>
  );
};

export const example = (
  <ThemeProvider theme={myCustomTheme}>
    <Mjml>
      <MjmlHead>
        <MjmlTitle>My new email</MjmlTitle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlWrapper>
          <MailSection>
            <MailButton href="https://www.daphnesmit.nl">
              Click me
            </MjmlButton>
          </MailSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  </ThemeProvider>
);

```

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
## Adding template tags
The build automatically transforms tags for you.

If you add variables like this `[[ someVarName ]]` the build will output this in the .html file as `{{ someVarName }}`.
Since `{{ }}` brackets are used for react variables we insert them with `[[ ]]` square brackets around it.

```tsx
<MjmlButton href="[[ someLinkVar ]]">Button</MjmlButton>
```

## Linting
Run `yarn lint-fix` in your terminal to start fixing any linting errors.


### Contributing

### Pull requests

Clear, concise pull requests are excellent at continuing the project's community driven growth.  

Please make your commits in logical sections with clear commit messages.  

## License

mjml-react-starter is available under the [MIT license](https://github.com/daphnesmit/mjml-react-starter/blob/main/LICENSE).

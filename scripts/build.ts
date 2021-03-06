import fs from 'fs';
import { render } from 'mjml-react';
import path from 'path';

import * as mails from '../src/templates/example';

const clearDirectory = (directory: string) => {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    fs.unlinkSync(path.join(directory, file));
  }
};

const generatedDirectory = path.join(__dirname, '../dist');

if (!fs.existsSync(generatedDirectory)) {
  fs.mkdirSync(generatedDirectory);
}

// remove all from generated
clearDirectory(generatedDirectory);

const generateTemplate = (name: string, mail: React.ReactElement) => {
  const { html } = render(mail, { validationLevel: 'soft', minify: true });
  const data = html
    .replace(/\[\[\[/gi, '{{{').replace(/\]\]\]/gi, '}}}')
    .replace(/\[\[/gi, '{{').replace(/\]\]/gi, '}}');

  try {
    fs.writeFileSync(path.join(generatedDirectory, `./${name}.html`), data);
    // file written successfully
    console.log('\x1b[34m', `Done building email template: ${name}`);
  } catch (error) {
    console.error(`Error generating html file for ${name}: `, error);
  }
};

//  Get all React templates and compile to templates
const generateTemplates = () => {
  Object.keys(mails).forEach((key) => generateTemplate(key, (mails as any)[key]));
  console.log('\x1b[32m', '✨ Done building email templates!');
};

generateTemplates();

import express from 'express';
import { render } from 'mjml-react';

import * as mails from '../src/templates';

const port = 3000;
const app = express();

for (const [key, template] of Object.entries(mails)) {
  app.get(`/${key}`, (_, res) => {
    const { html } = render(template as any, { validationLevel: 'soft' });

    res.send(html);
  });
}

app.listen(port, () => console.log('\x1b[35m', `🚀 Server ready at http://localhost:${port}`));

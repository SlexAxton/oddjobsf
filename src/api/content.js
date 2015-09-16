import { join } from 'path';
import { Router } from 'express';
import fm from 'front-matter';
import fs from '../utils/fs';
import Handlebars from 'handlebars';

// A folder with Handlebars/Markdown/HTML content pages
const CONTENT_DIR = join(__dirname, './content');

// Extract 'front matter' metadata and generate HTML
const parseHandlebars = (path, hbsContent) => {
  const fmContent = fm(hbsContent);
  const htmlContent = Handlebars.compile(fmContent.body)();
  return Object.assign({ path, content: htmlContent }, fmContent.attributes);
};

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    let path = req.query.path;

    if (!path || path === 'undefined') {
      res.status(400).send({error: `The 'path' query parameter cannot be empty.`});
      return;
    }

    let fileName = join(CONTENT_DIR, (path === '/' ? '/index' : path) + '.hbs');
    if (!await fs.exists(fileName)) {
      fileName = join(CONTENT_DIR, path + '/index.hbs');
    }

    if (!await fs.exists(fileName)) {
      res.status(404).send({error: `The page '${path}' is not found.`});
    } else {
      const source = await fs.readFile(fileName, { encoding: 'utf8' });
      const content = parseHandlebars(path, source);
      res.status(200).send(content);
    }
  } catch (err) {
    next(err);
  }
});

export default router;


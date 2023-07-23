import * as fs from 'fs';
import showdown from 'showdown';
const converter = new showdown.Converter({
  completeHTMLDocument: true,
  openLinksInNewWindow: true,
  strikethrough: true,
  tables:true,
  tasklists:true,
  underline:true,
})
const testFolder = './data/helps';
const helps = [];

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    const path = testFolder + '/' + file;
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return console.error(err)
      helps.push(createHtml(data, file));
    });
  });
});

function createHtml(text, filename) {
  const id = filename.split('.')[0];
  const html = converter.makeHtml(text);
  const timestamp = new Date().getTime();
  return { id, html, timestamp };
}

export default helps;


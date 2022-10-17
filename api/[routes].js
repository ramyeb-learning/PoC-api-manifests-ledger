const fs = require('fs');
const path = require('path');


function getManifest(path) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), path), 'utf-8'));

}

export default function handler(req, res) {
  const queryObject = url.parse(req.url, true).query;
  const { routes: fileName } = request.query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(getManifest('/manifests/'+fileName+'.json'));
}

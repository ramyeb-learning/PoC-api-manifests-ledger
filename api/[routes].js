const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), '/manifests/test.json'), 'utf-8'));

function getManifest(path) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), path), 'utf-8'));

}

export default function handler(req, res) {
  return res.json(getManifest('/manifests/'+req.body.path));
}

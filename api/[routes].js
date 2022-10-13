const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), '/manifests/test.json'), 'utf-8'));

export default function handler(req, res) {
  return res.json(manifest);
}

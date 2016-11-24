import path from 'path'

const root = path.join(__dirname, '..')

export default {
  entry: path.resolve('docs/src/client.js'),
  outputPath: path.join(root, 'docs/dist'),
  aliasUi: path.join(root, 'src'),
  aliasDocs: path.join(root, 'docs/src'),
  traverse: path.join(root, 'docs/vendor/markdown-it-traverse'),

  staticFolder: path.join(root, 'docs'),
  index: path.join(root, 'docs/index.html'),
  theme: path.join(root, 'src/styles'),
  port: 3030,
}

# Readme

Universal React components for Electron

## @electron-react/ui

### In development

Now package in development. Do not use it in production!

### Installation

```bash
npm install --save @electron-react/ui
```

### Usage

```js
import { Button } from '@electron-react/ui'

export default () => (
  <div>
    <Button>Default button</Button>
    <Button disabled>Disabled button</Button>
  </div>
)
```

### Development

```bash
git clone git@github.com:electron-react/ui.git electron-react/ui
cd electron-react/ui
npm install

npm run dev
```

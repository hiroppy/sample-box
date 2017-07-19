## Install
```
$ npm install
```

## lerna
```
$ lerna run flow # check types
$ lerna run build # run babel
```

## Usage
```javascript
import Button from '@sample-box/button';

const Root = () => (
  <div>
    <Button
      onClick={() => console.log('yay')}
    />
  </div>
);
```

React-Native does not have `onClick` but this library internally replaces `onClick` with `onPress`.

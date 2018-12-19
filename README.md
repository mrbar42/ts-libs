# Typescript Libs

provides typescript libs as scoped modules.
this is useful if you want to refer ro a certain type in only one file without having all the codebase exposed to it.
The version of this package follows the corresponding typescript version. e.g. this package 3.2.2 = Typescript 3.2.2

:warning:  **THIS IS NOT BATTLE TESTED** :warning:

install
```sh
npm i -S ts-libs

```

example:
```js
import {DOM} from 'ts-libs/lib/dom';

const global: DOM.Window = self;

class DOMAccess {
  WebSocket = global.WebSocket as DOM.WebSocket;
  XMLHttpRequest = global.XMLHttpRequest as DOM.XMLHttpRequest;
  public fetch = global.fetch as DOM.GlobalFetch['fetch'];

}
```

# license

While Typescript itself is under the Apache-2.0 license,
any other part of this project that is not derived from Typescript is under [WTFPL](http://www.wtfpl.net/) license.

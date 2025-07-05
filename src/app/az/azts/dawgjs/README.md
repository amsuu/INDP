**dawgjs** reads DAWG files created by [dawgdic](https://code.google.com/archive/p/dawgdic/) C++ library or [DAWG](https://github.com/kmike/DAWG) python package.

DAWG (directed acyclic word graph, also called [DAFSA](https://en.wikipedia.org/wiki/Deterministic_acyclic_finite_state_automaton)) is a data structure that lets you efficiently store sets of strings and also provides prefix search.

## Installation
```
npm install dawgjs
```

## Usage

### typescript
```ts
import { readStringMapDawgSync } from 'dawgjs'

let dawg = readStringMapDawgSync('dawg-file.dawg', bytes => {
  let view = new DataView(bytes.buffer)
  return {
    paradigmId: view.getUint16(0, true),
    indexInParadigm: view.getUint8(2)
  }
})

let morphologicalInterpretations = [...dawg.get('pierogi')]
```

### es6
```js
// todo
```

<!---
## Real-world use-case
**dawgs** is used to pack an entire morphological dictionary of Ukrainian (~5 million interpretations) into < 4MB which allows to tag texts directly in the browser. See [https://experimental.mova.institute/apps/morph-analyzer](https://experimental.mova.institute/apps/morph-analyzer).
--->
## Current limitations
- This package cannot create DAWGs.
- Targeting ES6. Additional transpilation required from you to target ES5/ES3.

## Contribution
Questions, feature requests, ideas, bugs and PRs are always welcomed on [github](https://github.com/msklvsk/dawgjs/issues/new).

## Development
```bash
git clone https://github.com/msklvsk/dawgjs.git
cd dawgjs
npm install
npm run build:watch
```

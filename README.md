# Unique Toke

Generate a increament token.
Unique, Readable, Sortable

## usage

```typescript
import { Token } from '@nananbug/unique-token'

const VNodeID = new Token('vnode')

const VNodeView = {
  id: `${VNodeID}`,
  type: 'View',
  props: {}
}
// {
//   id: '_vnode__A_',
//   type: 'View',
//   props: {}
// }

VNodeID.generate()
const VNodeImage = {
  id: `${VNodeID}`,
  type: 'Image',
  props: {}
}
// {
//   id: '_vnode__B_',
//   type: 'Image',
//   props: {}
// }

```

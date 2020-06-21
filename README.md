# Unique Toke

Generate a increament token.
Unique, Readable, Sortable


## usage

```typescript
import { Token } from 'unique-token'

const VNodeID = new Token('vnode')

const VNodeView = {
  id: VNodeID.generate()
  type: 'View',
  props: {}
}

const VNodeImage = {
  id: VNodeID.generate()
  type: 'image',
  props: {}
}

```
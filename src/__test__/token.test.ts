import {
  Token
} from '../'

describe('token', () => {
  let token: Token | undefined
  beforeEach(() => {
    token = new Token()
  })

  afterAll(() => {
    token = undefined
  })

  test('new Token', () => {
    expect(`${token}`).toBe('_A_')

    token?.generate()
    expect(`${token}`).toBe('_B_')

    for(let i = 0; i < 300; i++) {
      token?.generate()
    }
    expect(`${token}`).toBe('_Ep_')
  })
})

describe('token vnode', () => {
  let VNodeID: Token | undefined
  beforeEach(() => {
    VNodeID = new Token('vnode')
  })

  afterAll(() => {
    VNodeID = undefined
  })

  test('vnodeId', () => {
    const VNodeView = {
      id: `${VNodeID}`,
      type: 'View',
      props: {}
    }
    VNodeID.generate()
    const VNodeImage = {
      id: `${VNodeID}`,
      type: 'Image',
      props: {}
    }
    expect(VNodeView).toStrictEqual({
      id: '_vnode__A_',
      type: 'View',
      props: {}
    })

    expect(VNodeImage).toStrictEqual({
      id: '_vnode__B_',
      type: 'Image',
      props: {}
    })
  })

})
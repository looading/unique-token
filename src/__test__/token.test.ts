import {
  Token
} from '../'

describe('utils/token', () => {
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
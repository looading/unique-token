import { TokenNode } from "./tokenNode"

class Token {
  private current: TokenNode
  constructor(private type?: string, private prefix: string = '', private suffix: string = '') {
    this.current = new TokenNode(this.type)
  }

  private toString() {
    return `${this.prefix}_${this.current.getFullTokens()}_${this.suffix}`
  }

  private valueOf() {
    return this.toString()
  }

  generate() {
    return this.current.fullAdd()
  }
}

export {
  Token
}
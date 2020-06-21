class TokenNode {
  // 该节点的字符串值模板，让 TokenNode 不直接返回数字
  // 比如说 current = 1 => 对应的字符串为 B
  static template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  current = 0

  // 前一个节点的引用
  prevNode?: TokenNode

  // 下一个节点的引用
  nextNode?: TokenNode

  // 节点类型
  constructor(public type?: string) {}

  /**
   * 节点自增
   * 如果增加后当前值大于模板长度，则前一个节点自增， 当前节点置0
   * 如果没有前置节点，则新建一个节点作为前置节点
   */
  add() {
    const ret = this.current + 1

    if (ret > TokenNode.template.length - 1) {
      if (this.prevNode) {
        this.prevNode.add()
      } else {
        this.prevNode = new TokenNode(this.type)
        this.prevNode.nextNode = this
      }
      this.current = 0
    } else {
      this.current = ret
    }
  }

  /**
   * 获取末端 tokenNode
   */
  private getLatestNode(): TokenNode {
    if (this.nextNode) {
      return this.getLatestNode()
    } 
    return this
  }

  /**
   * 整个 tokenNode 链自增， 及获取末端节点自增
   */
  fullAdd() {
    const latestNode = this.getLatestNode()
    latestNode.add()
    return this.getFullTokens()
  }

  /**
   * 获取当前 tokenNode 的字符串表示
   */
  getToken() {
    return TokenNode.template[this.current]
  }

  /**
   * 获取前置所有 tokenNode 的字符串表示
   */
  getPrevTokens(): string {
    if (this.prevNode) {
      return `${this.prevNode.getPrevTokens()}${this.prevNode.getToken()}`
    }
    return ''
  }

  /**
   * 获取后置所有 tokenNode 字符串表示
   */
  getNextTokens(): string {
    if (this.nextNode) {
      return `${this.nextNode.getToken()}${this.nextNode.getNextTokens()}`
    }
    return ''
  }

  /**
   * 获取整个 tokenNode 链的字符串表示
   */
  getFullTokens() {
    if(this.type === null || this.type === undefined) {
      return `${this.getPrevTokens()}${this.getToken()}${this.getNextTokens()}`
    }
    return `${this.type}__${this.getPrevTokens()}${this.getToken()}${this.getNextTokens()}`
  }
}

export {
  TokenNode
}
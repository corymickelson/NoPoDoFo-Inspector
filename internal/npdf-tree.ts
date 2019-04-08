import {nopodofo} from 'nopodofo'

export interface INpdfTreeNode {
  parent: INpdfTreeNode
  children: INpdfTreeNode[]
}
class NpdfTree {
  private readonly _root: NpdfTreeNode
  get root(): NpdfTreeNode {
    return this._root
  }

  constructor(
    private readonly body: nopodofo.Object[],
    private readonly catalog: nopodofo.Object) {
    this._root = new NpdfTreeNode(catalog)
  }

}

class NpdfTreeNode {
  private _definition: Object = {}

  get self(): Object {
    if (this._definition) {
      return this._definition
    }
    switch (this.obj.type) {
      case 'Boolean':
      case 'Number':
      case 'Name':
      case 'Real':
      case 'String':
        this._constructPrimitiveDefinition()
        break
      case 'Array':
        this._constructArrayDefinition()
        break;
      case 'Dictionary':
        this._constructDictionaryDefinition()
        break;
      case 'Reference':
        this._constructReferenceDefinition()
        break;
      case 'RawData':
        this._constructRawDefinition()
        break;
    }
  }

  constructor(private readonly obj: nopodofo.Object) {
  }

  private _constructDictionaryDefinition() {
    const dictionary = this.obj.getDictionary()
    dictionary.getKeys()
      .map(k => {

      })
  }

  private _constructArrayDefinition() {
  }

  private _constructRawDefinition() {
  }

  private _constructPrimitiveDefinition() {
  }

  private _constructReferenceDefinition() {
  }
}

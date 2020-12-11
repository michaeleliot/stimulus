import { Scope } from "./scope"

export class ClassMap {
  readonly scope: Scope

  constructor(scope: Scope) {
    this.scope = scope
  }

  has(name: string) {
    return this.data.has(this.getDataKey(name))
  }

  get(name: string) {
    return this.getAll(name)[0];
  }

  getAll(name: string) {
    const classAttribute = this.data.get(this.getDataKey(name));

    if (classAttribute) {
      return classAttribute.split(" ")
    } else {
      return []
    }
  }

  getAttributeName(name: string) {
    return this.data.getAttributeNameForKey(this.getDataKey(name))
  }

  getDataKey(name: string) {
    return `${name}-class`
  }

  get data() {
    return this.scope.data
  }
}

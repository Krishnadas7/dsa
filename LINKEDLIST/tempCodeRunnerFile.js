class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class linkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty () {
    return this.size === 0
  }
  getSize () {
    return this.size
  }
  prepend (value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  print () {
    if (this.isEmpty()) {
      console.log('no values found')
    } else {
      let current = this.head
      let listValues = ''
      while (current) {
        listValues += `${current.value} `
        current = current.next
      }

      console.log('listvalues  :', listValues)
    }
  }

  append (value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  removeFromFront () {
    if (this.isEmpty()) {
      console.log('no values found for deleting')
      return null
    } else {
      let removedNode = this.head
      this.head = removedNode.next
      this.size--
    }
  }

  removeFromEnd () {
    if (this.isEmpty()) {
      console.log('no values found for deleting')
      return null
    }
    const value = this.tail.value
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = this.head
      while (prev.next !== this.tail) {
        prev = prev.next
      }
      prev.next = null
      this.tail = prev
    }
    this.size--
    return value
  }
}

let list = new linkedList()


list.append(10)
list.append(20)
list.append(30)
// list.removeFromEnd()
console.log('size is :', list.getSize())
list.print()


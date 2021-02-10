const chainMaker = {
  arr: [],
  getLength() {
    this.arr.push(this.arr.length);
    return this;
  },
  addLink(value = ' ') {
    this.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.arr[position] == undefined) throw new Error('Error');
    console.log(position);
    console.log(this.arr);
    this.arr.splice(position - 1, 1);
    console.log(this.arr);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.arr[0]} )`;

    for (let i = 1; i < this.arr.length; i++) {
      result += `~~( ${this.arr[i]} )`;
    }

    console.log(result);
  }
};
chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
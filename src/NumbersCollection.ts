export class NumbersCollection {
  constructor(public data: number[]){}

  // get - used as a keyword to access length value without calling it as a method
  get length(): number{
    return this.data.length;
  }

  compare(leftIndex:number, rightIndex:number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex:number, rightIndex:number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
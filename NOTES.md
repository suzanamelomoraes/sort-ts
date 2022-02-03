class Sorter {

- define property:
  collection: number[];

- Instantiate property:
  constructor(collection: number[]){
  this.collection = collection;
  }

- Same as above:
  constructor(public collection: number[] | string){
  }

- Following the logic below to crete a Bubble Sort algorithm:
  sort(): void {
  const { length } = this.collection;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {

         - all of this only works if collection is number[]
         - if collection is an array of numbers:
          if (this.collection instanceof Array) {
            - Type Guard -> collection === number[]
            if (this.collection[j] > this.collection[j + 1]){
              const leftHand = this.collection[j];
              this.collection[j] = this.collection[j + 1];
              this.collection[j + 1] = leftHand;
            }
          }

        - Only going to work if collection is a string
        - if collection is a string, do this logic instead:
          if (typeof this.collection === 'string') {
          - ~~logic to compare and swap characters in a string
          }
        - Type Guard - restore all the properties associated to a string previously missed by the union operator
        }
      }

  }
  }

- typeof -> narrow type of a value to primitive type - number, string, boolean, symbol
- instanceof -> narrow down every other type of value (created with a constructor function)

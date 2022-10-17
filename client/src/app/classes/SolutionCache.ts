export class SolutionCache{
  solutions: Map<number, Map<number, Solutions>> = new Map<number, Map<number, Solutions>>()

  printAll(){
    console.log(this.solutions)
  }
}

export interface Solutions {
  part1: string;
  part2: string;
}

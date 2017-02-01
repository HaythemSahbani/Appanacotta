export class CoffeeShop {
  /* name string */
  private name: string;
  /* rating: float from 0 to 5 */
  private rating: number;
  /* waitTime: date */
private waitTime: number;
/*walkTime: date */
private walkTime: number;

/*walkDist: number in KM */
private walkDist: number;

/* speed in Km/h */
private speed = 2;

constructor(name: string, rating:number, waitTime: number, walkDist: number) {
  this.rating = rating;
  this.walkTime = walkTime;
  this.walkDist = walkDist;
  this.name = name;

}
  set walkTime(val: number) {
      // calculate from walk dist;
      this.walkTime = val/this.speed;
  }
  get walkTime (): number{
      return this.walkTime;
  }
}

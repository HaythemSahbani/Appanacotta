export class CoffeeShop {
  /* name string */
  private name: string;
  /* rating: float from 0 to 5 */
  private rating: number;
  /* waitTime: date */
private waitTime: number;

/*distance: number in KM */
private distance: number;

/* speed in Km/h */
private speed = 2;

constructor(name: string, rating:number, waitTime: number, distance: number) {
  this.rating = rating;
  this.waitTime = waitTime;
  this.distance = distance;
  this.name = name;
  // this.walkTime = distance;
}
  set walkTime(val: number) {
      // calculate from walk dist;
      this.walkTime = val/this.speed;
  }
  get walkTime (): number{
      return this.walkTime;
  }
}

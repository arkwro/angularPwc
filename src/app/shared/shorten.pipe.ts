import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
  // pure: false
})
export class ShortenPipe implements PipeTransform {
  //
  // constructor() {}

  transform(value: any, length = 20): any {
    // return Math.random();
    // console.log('Now!')

    return value.length >= length ? value.substr(0, length) + "..." : value;
  }
}

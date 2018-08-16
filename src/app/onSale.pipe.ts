import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg';

@Pipe({
  name: "onSale",
  pure: false
})

export class OnSalesPipe implements PipeTransform {
  transform(input: Keg[], desiredSale) {
    let output: Keg[] = [];
    if (desiredSale === "onSaleKegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].onSale === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSale === "notOnSaleKegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].onSale === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

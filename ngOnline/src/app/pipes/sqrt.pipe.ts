import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
})
export class SqrtPipe implements PipeTransform {
  transform(value) {
    // rest and spread op
    // code
    return Math.sqrt(value);
  }
}

/*

class Car{
  start(){
  ......
  }

  speed(){
  ...... 200km/hr
  }

  stop(){
  ......
  }
}

class TATA inh Car{

  move(){
  ......
  }
}


class CarTwo{
  start(){}

  speed(){}

  stop(){}
}

class FOne imp CarTwo {
  speed(){ : 600km/hr}
}




*/

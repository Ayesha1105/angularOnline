import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() dataFromParent;
  @Output() dataToParent = new EventEmitter();

  sendData() {
    this.dataToParent.emit('Hello from child..!!');
  }
}

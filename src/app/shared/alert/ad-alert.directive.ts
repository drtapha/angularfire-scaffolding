import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[add-alert]',
})
export class AddAlertDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
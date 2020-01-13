import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[items-host]',
})
class ItemsHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

export { ItemsHostDirective };

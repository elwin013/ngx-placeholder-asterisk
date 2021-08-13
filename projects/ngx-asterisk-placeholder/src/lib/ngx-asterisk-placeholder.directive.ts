import { ElementRef, Directive } from '@angular/core';

@Directive({
  selector: '[asteriskPlaceholder]'
})
export class AsteriskPlaceholderDirective {

  constructor(el: ElementRef) {
    if (el.nativeElement.placeholder && !el.nativeElement.placeholder.endsWith(" *")) {
      el.nativeElement.placeholder += " *";
    }
  }
}

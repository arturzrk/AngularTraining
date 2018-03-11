import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;
  constructor(private el : ElementRef) { }

  @HostListener('blur') onBlur() {
    let val : string = this.el.nativeElement.value;
    if( this.format == 'lowercase')
      this.el.nativeElement.value = val.toLowerCase();
    else
      this.el.nativeElement.value = val.toUpperCase();
  }

}

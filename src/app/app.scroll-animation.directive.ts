import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {

  @Input() animationClass!: string;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight + 300 || document.documentElement.clientHeight + 300) &&
      rect.top < (window.innerHeight + 300 || document.documentElement.clientHeight + 300)
    );
    if (isVisible) {
      this.el.nativeElement.classList.add(this.animationClass);
    }
  }
}

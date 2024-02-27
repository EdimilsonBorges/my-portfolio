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
      rect.bottom <= (window.innerHeight + 450 || document.documentElement.clientHeight + 450) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
    if (isVisible) {
      this.el.nativeElement.classList.add(this.animationClass);
    }
  }
}

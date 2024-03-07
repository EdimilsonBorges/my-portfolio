import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ScrollViewService } from 'src/app/services/scroll-view.service';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {

  @Input() animationClass: string = "";

  constructor(private el: ElementRef, private scrollViewService: ScrollViewService) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight + 450 || document.documentElement.clientHeight + 450) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
    if (isVisible) {
      if (this.animationClass !== "") {
        this.el.nativeElement.classList.add(this.animationClass);
      }
      switch (this.el.nativeElement.classList[0]) {
        case "inicio": this.scrollViewService.classMenu.next("inicio");
          break;
        case "sobre": this.scrollViewService.classMenu.next("sobre");
          break;
        case "habilidades": this.scrollViewService.classMenu.next("habilidades");
          break;
        case "portifolio": this.scrollViewService.classMenu.next("portifolio");
          break;
        case "contact": this.scrollViewService.classMenu.next("contact");
          break;
      }
    }
  }
}

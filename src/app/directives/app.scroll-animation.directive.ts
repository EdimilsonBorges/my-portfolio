import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ScrollViewService } from 'src/app/services/scroll-view.service';

@Directive({
  selector: '[appScroll]'
})
export class ScrollAnimationDirective {

  @Input() animationClass: string = "";

  constructor(private el: ElementRef, private scrollViewService: ScrollViewService) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollProgress();
    this.pageSelect()
  }

  scrollProgress(){
    const scrollTop = scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    this.scrollViewService.percentBar.next(progress);
  }

  pageSelect(){
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = (
       rect.top >= 0 &&
       rect.bottom <= (window.innerHeight + 450)  || (document.documentElement.clientHeight + 450) &&
       rect.top < (window.innerHeight - 250 || document.documentElement.clientHeight - 250)
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

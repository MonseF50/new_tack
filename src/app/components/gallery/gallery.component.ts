import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-gallery',
  imports: [HeadingComponent, CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  @ViewChild('overlay') overlayDiv!: ElementRef
  @ViewChild('image') overlayImage!: ElementRef

  images: string[] = [
    '/image/imgi_1_imageye___-_poert1.png',
    '/image/imgi_2_imageye___-_port2.png',
    '/image/imgi_3_imageye___-_port3.png',
    '/image/imgi_1_imageye___-_poert1.png',
    '/image/imgi_2_imageye___-_port2.png',
    '/image/imgi_3_imageye___-_port3.png',
  ]
  imageLayout: string = ""
  showModel: boolean = false
  displayLayoutImage() {
    this.showModel = !this.showModel
  }
  closeLayoutImage(event: MouseEvent): void {
    const image = this.overlayImage.nativeElement
    if (event.target !== image) {
      this.showModel = false
    }
  }
}

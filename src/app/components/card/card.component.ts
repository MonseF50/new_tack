import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgSrc!: string
  @Output() urlSending = new EventEmitter<string>()
  sendingImageUrl(): void {
    this.urlSending.emit(this.imgSrc)
  }
}

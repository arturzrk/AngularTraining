import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
    .glyphicon {
      color: green;
    }
    `
  ],
  styleUrls: ['./favorite.component.css'],
})

export class FavoriteComponent {
  @Input('is-favorite') isFavorite : boolean;
  @Output('change') change = new EventEmitter();
  onClick() {
    this.isFavorite = !this.isFavorite;
    var eventArgs : FavoriteChangedEventArgs = {
      isFavorite : this.isFavorite
    }
    this.change.emit(eventArgs);
  }
}

export interface FavoriteChangedEventArgs {
  isFavorite : boolean;
}

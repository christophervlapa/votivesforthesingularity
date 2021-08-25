import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lettermovement',
  templateUrl: './lettermovement.component.html',
  styleUrls: ['./lettermovement.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LettermovementComponent {

  alphabet: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  randomLetter = () => this.alphabet[Math.floor(Math.random() * this.alphabet.length)];

  widthAndHeightMultipler = (500 / 20) * 24;

  lettersIteratorRange = Array.from(Array(this.widthAndHeightMultipler).keys());
  
  // make an array widthAndHeightMultipler long and fill with randomLetter
  initalRandomLetterArray = new Array(this.widthAndHeightMultipler).fill(this.randomLetter());

  constructor() {}
}

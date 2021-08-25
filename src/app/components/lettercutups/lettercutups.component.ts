import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MouseoutClassDirective } from 'src/app/directives/mouseoutClass';

@Component({
  selector: 'app-lettercutups',
  templateUrl: './lettercutups.component.html',
  styleUrls: ['./lettercutups.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class LettercutupsComponent implements OnInit {

  alphabet: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  randomLetter = () => this.alphabet[Math.floor(Math.random() * this.alphabet.length)];

  widthAndHeightMultipler = (500 / 20) * 24;

  lettersIteratorRange = Array.from(Array(this.widthAndHeightMultipler).keys());

  initalRandomLetterArray: Array<string> = [];

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init = () => {
    // make an array widthAndHeightMultipler long and fill with randomLetter
    this.initalRandomLetterArray = new Array(this.widthAndHeightMultipler).fill(this.randomLetter());
  }

  // change letter 
  changeLetter = (el: any) => {
    // this.document.querySelector('#'+el)!.innerHTML = this.randomLetter();
    this.document.getElementById(el)!.innerHTML = this.randomLetter();
  }

  resetLetters = (event: Event) => {
    this.init();
  }
}

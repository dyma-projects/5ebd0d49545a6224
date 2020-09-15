import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input()
  totalCount: number = 0;

  @Output('increase')
  public increaseEventEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output('decrease')
  public decreaseEventEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  increase(): void {
    this.increaseEventEmmiter.emit(true)
  }
  decrease(): void {
    this.decreaseEventEmmiter.emit(true)
  }

}

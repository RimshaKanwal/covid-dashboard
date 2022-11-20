import { Component, Input, OnInit } from '@angular/core';

export interface ICardData {
  title: string,
  value: string,
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICardData;
  constructor() { }

  ngOnInit(): void {    
  }

}

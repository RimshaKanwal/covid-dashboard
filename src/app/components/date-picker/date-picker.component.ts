import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Output() public selectedDate: EventEmitter<string> = new EventEmitter();

  myControl = new FormControl('');
	model: NgbDateStruct;
	date: { year: number; month: number };

  constructor() { }

  ngOnInit(): void {
  }

   public dateChanged(e:any){
    this.selectedDate.emit(e)
  }

}

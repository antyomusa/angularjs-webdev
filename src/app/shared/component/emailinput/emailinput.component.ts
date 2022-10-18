import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emailinput',
  templateUrl: './emailinput.component.html',
  styleUrls: ['./emailinput.component.scss']
})
export class EmailinputComponent implements OnInit {

  @Input() isEmail: boolean = false;

  @Output() iniEventEmail = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.iniEventEmail.emit("");
  }

  iniFungsiTampungValue(event: any) {
    this.iniEventEmail.emit(event.target.value);
  }

}

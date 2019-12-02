import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  timer;
  @Input() messageTitle: string;
  @Input() changed: boolean;
  @Input() timerSeconds: number;
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.onTitleChange();
  }

  onTitleChange() {
    let timer = setInterval(() => {
      if(this.timerSeconds == 0) {
        this.pause();
        this.titleChanged.emit(this.messageTitle);
      }
    },1000);
  }
  
  pause() {
    clearInterval(this.timer);
  }

}

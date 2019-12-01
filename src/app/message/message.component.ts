import { Component, OnInit, Input } from '@angular/core';
import { NgModel} from '@angular/forms';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() messageTitle: string;
  @Input() changed: boolean;
  @Input() timerZero: number;
  timer;
  @Input() stoperTimer: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.onTitleChange();
  }

  onTitleChange() {
      let timer = setInterval(() => {
        if(this.timerZero > 0) {
          this.timerZero--;
        } else {
          this.pause();
          if(this.messageTitle = "Timer Stoped")
            this.stoperTimer = !this.stoperTimer;
          
        }
      },1000);
       
    
  }
  pause() {
    clearInterval(this.timer);
  }

}

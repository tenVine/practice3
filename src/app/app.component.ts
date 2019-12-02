import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timer;
  heading: string = 'Practice3.1';
  timeLeft: number = 10;
  changeColor: boolean = true;
  changeText: string = 'Timer Works!!';
  changedTitle: boolean =false;
  
  ngOnInit() {
    this.start();
  }

  onTitleChange(messageTitle: string) {
    messageTitle == 'Timer Stoped' ? this.changedTitle = true: this.changedTitle = false;
  }

  start() {
    this.timer = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pause();
        this.changeColor = !this.changeColor;
        this.changeText = 'Timer Stoped';
      }
    },1000)
  }
  
  pause() {
      clearInterval(this.timer);
  }
  
}

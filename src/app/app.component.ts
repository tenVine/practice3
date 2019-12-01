import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heading: string = 'Practice3.1';
  timer: any;
  timeLeft: number = 10;
  changeColor: boolean = true;
  changeText: string = 'Timer Works!!';
  timestop: boolean;
  

  ngOnInit() {
    this.start();
    console.log(this.timestop)
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

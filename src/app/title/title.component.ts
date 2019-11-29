import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() headingTitle: string;
  @Input() messageTitle: string;
  titleChange: boolean = false;
  
  constructor() { }

  ngOnInit() {
    console.log(this.titleChange);
    console.log(this.messageTitle);
    console.log(this.titleChange);
    if(this.messageTitle === 'Timer stoped') {
      this.titleChange = !this.titleChange;
      console.log(this.titleChange);
    }
  }
  
}

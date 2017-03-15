import { Component, OnInit, OnDestroy, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sbm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() type : string;
  @Input() message : string; 
  @Output() closed : EventEmitter<boolean> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  close(){
    this.closed.emit(true); 
  }
}

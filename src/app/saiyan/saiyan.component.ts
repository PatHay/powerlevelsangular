import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){        // changes variable set in parent component.  Will change based on input change in this case
    this.power = this.power*10;
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(private comminService: CommonService) { }
  message: string = '';
  ngOnInit() {
    this.comminService.getMessage().subscribe((msg: string) => {
      console.log(msg, new Date());
      this.message = msg;
      console.log('------------');
    })
  }

}

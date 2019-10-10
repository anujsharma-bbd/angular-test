import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private commonsService: CommonService) { }
  message: string = '';
  ngOnInit() {

  }
  onClick() {
    this.commonsService.sendMessage(this.message);
  }
}

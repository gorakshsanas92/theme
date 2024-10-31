import { Component } from '@angular/core';
import * as CONSTANT  from '../shared/const';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {

  requestTableHeader = CONSTANT.requestTableHeader

  tableData: any = ["1", "P1", "Test", "Test", "Test", "Test", 
  "Test", "Test", "Test", "Test", "Test", "Test", "Test"]

  constructor(private sharedServ: SharedService){
    // Set Page Title
    this.sharedServ.setPageTitleValue('Request')
  }

}

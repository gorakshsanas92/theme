import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  pageTitle: any
  constructor(private sharedServ: SharedService){}

  ngOnInit(): void {
    this.sharedServ.getPageTitleValue().subscribe((value) => {
      this.pageTitle = value;
    });
  }

}

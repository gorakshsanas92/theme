import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  logo = "assets/compiled/svg/logo.svg"

  constructor(private sharedServ: SharedService){
    this.sharedServ.getPageLogo().subscribe((logo: any) => {
      this.logo = logo
    })
  }
}

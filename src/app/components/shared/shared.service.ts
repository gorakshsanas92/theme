import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private pageTitle: BehaviorSubject<any>;
  private logo:  BehaviorSubject<any>;

  constructor() {
    this.pageTitle = new BehaviorSubject<any>('Dashboard');
    this.logo = new BehaviorSubject<any>("assets/compiled/svg/logo.svg")
  }

  getPageTitleValue(): Observable<boolean> {
    return this.pageTitle.asObservable();
  }
  setPageTitleValue(newValue: any): void {
    this.pageTitle.next(newValue);
  }


  getPageLogo(): Observable<boolean> {
    return this.logo.asObservable();
  }
  setPageLogo(newValue: any): void {
    this.logo.next(newValue);
  }

}

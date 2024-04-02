import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch!:ElementRef<HTMLInputElement>;
  @Output() onSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    const searchString=this.inputSearch.nativeElement.value;
    if(searchString.trim().length === 0){
      return;
    }
    this.onSearch.emit(searchString);
    this.inputSearch.nativeElement.value='';
  }

}

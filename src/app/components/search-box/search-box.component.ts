import {Component, EventEmitter, Output} from "@angular/core";



@Component({
  selector:'app-search-box',
  templateUrl:'./search-box.component.html',
  styleUrls:['./search-box.component.css']
})
export class SearchBoxComponent{
  value:string="";

  @Output()
  searchEvent = new EventEmitter();

  onValueChange(value:string):void{
    this.searchEvent.emit(value)
  }

}

import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector:"app-section",
  templateUrl:"./section.component.html",
  styleUrls:["./section.component.css"],
})
export class SectionComponent{
  @Input() section:any;
  @Input() selected:boolean = false;
  @Output() select = new EventEmitter<any>();

  onClick(){
    this.select.emit(this.section);
  }
}

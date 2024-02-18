import { Component, Input } from "@angular/core";
import {User} from "../../type/user.type";

@Component({
  selector:'app-user-list',
  templateUrl:'./user-list.component.html',
  styleUrls:['./user-list.component.css'],
})
export class UserListComponent{
  @Input()
  userDetails!:User[];

  @Input()
  search!:string;

}

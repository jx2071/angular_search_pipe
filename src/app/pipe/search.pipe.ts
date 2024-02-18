import {Pipe, PipeTransform} from "@angular/core";
import {User} from "../type/user.type";

@Pipe(
  {name:"searchName"}
)
export class SearchNamePipe implements PipeTransform{
  transform(value: User[], search:string, ...args: any[]) {
    if(search === "" || search === null){
      return value;
    }
    else{
      let res:User[] = [];
      value.forEach((user)=>{
        if(user.firstName.toLowerCase().indexOf(search.toLowerCase())!==-1 ||user.lastName.toLowerCase().indexOf(search.toLowerCase())!==-1) res.push(user);
      })
      // console.log(search,value,res);
      return res;
    }
  }

}

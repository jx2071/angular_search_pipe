import {Pipe, PipeTransform} from "@angular/core";

@Pipe(
  {name:"parseDate"}
)
export class ParseDatePipe implements PipeTransform{
    transform(date: Date, ...args: any[]) {
        return `${date.getDate().toString().padStart(2,'0')} / ${date.getMonth().toString().padStart(2,'0')} / ${date.getFullYear()}`
    }

}

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import {UserListComponent} from "./components/user-list/user-list.component";
import {ParseDatePipe} from "./pipe/parse-date.pipe";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {SearchNamePipe} from "./pipe/search.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SearchBoxComponent,
    ParseDatePipe,
    SearchNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

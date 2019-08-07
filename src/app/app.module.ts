import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedComponentList } from "./red/red.component-list";
import { GreenComponentList } from "./green/green.component-list";
import { BlueComponentList } from "./blue/blue.component-list";

@NgModule({
  declarations: [
    AppComponent,
    ...RedComponentList,
    ...GreenComponentList,
    ...BlueComponentList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

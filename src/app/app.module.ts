import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { ToolComponent } from './tool/tool.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ExperianceComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EntryComponent } from './entry/entry.component';
import { EditComponent } from './user/edit/edit.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingnavbarComponent } from './settingnavbar/settingnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EntryComponent,
    EditComponent,
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingnavbarComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EntryComponent } from './entry/entry.component';
import { EditComponent } from './user/edit/edit.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';


const routes: Routes = [

  {path: 'user' , component: UserComponent },
  {path: 'entry' , component: EntryComponent },
  {path: 'edit' , component: EditComponent },
  {path: '' , component: EntryComponent },
  {path: 'asidenavbar', component: AsidenavbarComponent},
  {path: 'footernavbar', component: FooternavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

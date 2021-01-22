import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultationsComponent} from './components/Consultation/consultations/consultations.component'
import {ConsultationComponent} from './components/Consultation/consultation/consultation.component'
import {RoomChatsComponent} from './components/RoomChats/room-chats/room-chats.component'
import {LoginComponent} from './components/login/login.component'
import {FilmsComponent}from './components/Films/films/films.component'
import {WatchComponent}from './components/Films/watch/watch.component'
import {AuthGuard} from './_helpers/auth.guard'
import {ProfilComponent} from './components/Profil/profil/profil.component'
import {ArticlesComponent} from './components/Forum/articles/articles.component'
import {HomeComponent} from '../app/components/Home/home/home.component'
import {AboutComponent} from '../app/components/Home/about/about.component'


const routes: Routes = [
  {path: 'Login', component : LoginComponent },
  {path: 'About', component : AboutComponent},
  {path: '', component : HomeComponent},
  {path: 'Consultations', component : ConsultationsComponent , canActivate: [AuthGuard]},
  {path: 'Films', component :  FilmsComponent , canActivate: [AuthGuard]},
  {path: 'Watch', component :  WatchComponent , canActivate: [AuthGuard]},
  {path: 'Consultation', component : ConsultationComponent , canActivate: [AuthGuard]},
  {path: 'RoomChats', component : RoomChatsComponent , canActivate: [AuthGuard]},
  {path: 'Profile', component : ProfilComponent , canActivate: [AuthGuard]}, 
  {path: 'Forum', component : ArticlesComponent , canActivate: [AuthGuard]},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

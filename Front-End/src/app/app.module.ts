import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './components/bar/bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ConsultationsComponent } from './components/Consultation/consultations/consultations.component';
import { ConsultationComponent } from './components/Consultation/consultation/consultation.component';
import { CreateComponent } from './components/Consultation/create/create.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RoomChatsComponent } from './components/RoomChats/room-chats/room-chats.component';
import { ChatComponent } from './components/RoomChats/chat/chat.component';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';
import { CreateRoomComponent } from './components/RoomChats/create-room/create-room.component'; 
import { DatePipe } from '@angular/common';
import { AddComponent } from './components/Films/add/add.component';
import { SuggestionsComponent } from './components/Films/suggestions/suggestions.component';
import { AddSuggestionsComponent } from './components/Films/add-suggestions/add-suggestions.component';
import { FilmsComponent } from './components/Films/films/films.component';
import { WatchComponent } from './components/Films/watch/watch.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilComponent } from './components/Profil/profil/profil.component';
import { InfosComponent } from './components/Profil/infos/infos.component';
import { PostsComponent } from './components/Profil/posts/posts.component';
import { ArticlesComponent } from './components/Forum/articles/articles.component';
import { CommentComponent } from './components/Forum/comment/comment.component';
import { AddPostComponent } from './components/Forum/add-post/add-post.component';
import { HomeComponent } from './components/Home/home/home.component';
import { FooterComponent } from './components/Home/footer/footer.component';
import { AboutComponent } from './components/Home/about/about.component'




@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    ConsultationsComponent,
    ConsultationComponent,
    CreateComponent,
    RoomChatsComponent,
    ChatComponent,
    LoginComponent,
    CreateRoomComponent,
    AddComponent,
    SuggestionsComponent,
    AddSuggestionsComponent,
    FilmsComponent,
    WatchComponent,
    ProfilComponent,
    InfosComponent,
    PostsComponent,
    ArticlesComponent,
    CommentComponent,
    AddPostComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

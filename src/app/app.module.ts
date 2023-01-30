import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { AddclientComponent } from './components/addclient/addclient.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AproposComponent,
    ErrorComponent,
    FooterComponent,
    AccueilComponent,
    AddclientComponent,
    AddUserComponent,
    ListClientsComponent,
    DetailsClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

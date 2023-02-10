import { Component, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { DashbordAgentComponent } from './components/dashbord-agent/dashbord-agent.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { DetailuserComponent } from './components/detailuser/detailuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { ErrorComponent } from './components/error/error.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { LoginComponent } from './components/login/login.component';
import { UseraddComponent } from './components/useradd/useradd.component';

const routes: Routes = [
{path:'accueil', title:'Accueil',component:AccueilComponent},
{path:'apropos',title:'Apropos', component:AproposComponent},
{path:'login',title:'Login',component:LoginComponent},
{path:'addclient',title:'Addclient',component:AddclientComponent},
//{path:'adduser',title:'Adduser',component:AddUserComponent},
{path:'useradd',title:'UseraddComponent',component:UseraddComponent},
{path:'listusers',title:'Listusers',component:ListusersComponent},
{path:'edituser/:id',title: 'Edituser',component:EdituserComponent},
{path:'detailuser',title:'Detailuser',component:DetailuserComponent},
{path:'dashbordadmin',title:"Dashbordadmin",component:DashbordAdminComponent},
{path:'dashbordagnet',title:"Dashbordagent",component:DashbordAgentComponent},
{path:'listclient',title:'Listclient',component:ListClientsComponent,
children:[
  { path:'detailsclient', component:DetailsClientComponent},]},

{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**', title:'Erreur', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

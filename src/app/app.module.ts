import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { classComponent } from './classBinding.component';
//import { styleComponent } from './styleBinding.component';
//import { TextComponent } from './template.component';
//import { twowayComponent } from './twoway.component';
//import { drctvComponent } from './drctv.component';
//import { ageComponent } from './candidate.component';
//import { ngStyleComponent } from './ngStyle.component';
//import { ngClassComponent } from './ngClass.component';
//import { ngSwitchComponent } from './ngSwitch.component';
//import { bankAccount } from './inputApi.component';
//import { App } from './inputApi.component';
//import { register } from './inputApi1.component';
//import { view } from './inputApi1.component';
import { bootStrapComponent} from './bootStrap.component'; 
@NgModule({
  declarations: [
    AppComponent,
	//classComponent,
	//styleComponent,
	//TextComponent,
	//twowayComponent
	//drctvComponent,
	//ageComponent,
	//ngStyleComponent,
	//ngClassComponent,
	//ngSwitchComponent,
	//bankAccount,
	//App,
	//register,
	//view,
	bootStrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGrapperComponent } from './components/form-grapper/form-grapper.component';
import { FormStepComponent } from './components/form-step/form-step.component';

@NgModule({
  declarations: [AppComponent, FormGrapperComponent, FormStepComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

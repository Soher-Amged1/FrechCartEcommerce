import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { MyhttpInterceptor } from './core/interceptor/myhttp.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,NgxSpinnerModule,AppRoutingModule,HttpClientModule,BrowserAnimationsModule, ToastrModule.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
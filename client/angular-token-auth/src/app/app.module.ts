import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { MaterializeModule } from "angular2-materialize";

import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";

import { AuthGuard } from "./_guards";
import { JwtInterceptor } from "./_helpers";
import { AuthenticationService, UserService } from "./_services";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from "@angular/core";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "app";

  constructor() {
    const url = environment.token_auth_config;
      console.log('​AppComponent -> constructor -> url', url);
      // .signIn({ email: "user@example.com", password: "monkey67" })

      
    }
}

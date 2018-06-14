import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  url = environment.token_auth_config.apiBase;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const jsonpayload = {
      email: username,
      password: password
    };

    return this.http
      .post<any>(`${this.url}/auth/sign_in`, jsonpayload, {
        observe: "response",
        responseType: "json"
      })
      .pipe(
        map((res: any) => {
          console.log("​AuthenticationService -> constructor -> res", res);
          // login successful if there's a jwt token in the response
          const accessToken = res.headers.get("Access-Token");
          console.log('​AuthenticationService -> constructor -> accessToken', accessToken);
         
          if (res && accessToken) {
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              "currentUser",
              JSON.stringify({ username, token: accessToken })
            );
          }
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models";
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {
  api = environment.token_auth_config.apiBase;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${this.api}/users.json`);
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    /*    this.userSubject = new BehaviorSubject<User>({
            id : 1,
            userName: "User",
            name: "Bichou",
            prenom: "Youssef",
            email: "youssef@email.com",
            datenaissance: "11/03/1998",
            type: "etudiant",
            roles: [{name : "USER"}],
            active: true,
            num:"066666",
            authdata: "VXNlcjoxMjM0", 
        })*/
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(username+':'+password)
        })}
        return this.http.get<any>(`${environment.apiUrl}/Login`, httpOptions)
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata =  window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/']);
        
    }

    GetRoles(){
        var roles = []; 
        this.userValue.roles.forEach(role=>{
            var name = role.name
            roles.push(name)
        })
        
        return roles ; 
    }
}

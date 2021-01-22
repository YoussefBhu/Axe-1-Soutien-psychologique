import {Role} from './Role'
export class User {
    id?: number;
    userName?: String;
    name?: String;
    prenom?: String;
    email?: String;
    datenaissance?: String;
    type?: String;
    roles?: Role[];
    active?: true;
    num?:String;
    authdata?: String; 
}
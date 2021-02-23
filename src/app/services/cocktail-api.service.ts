import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL,list,lookup,search } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {

  constructor(private http: HttpClient) { }

  getCocktailsByName(searchedName):Observable<any>{
    return this.http.get(baseURL + search+'s='+searchedName);
  }
  getCocktailsById(id):Observable<any>{
    return this.http.get(baseURL + lookup+'i='+id);
  }
  getAllCategories():Observable<any>{
    return this.http.get(baseURL + list+'c=list');
  }
  getAllGlasses():Observable<any>{
    return this.http.get(baseURL + list+'g=list');
  }
  getAllAlcoholsList():Observable<any>{
    return this.http.get(baseURL + list+'a=list');
  }
  /*getAllIngredients():Observable<any>{
    return this.http.get(baseURL + list+'i=list');
  }*/
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

const authorizeOptions = {
  url: 'https://accounts.spotify.com/authorize/',
  params: new HttpParams()
    .set('client_id', '0a405b349c54473d9511630f1faf4c56')
    .set('response_type', 'code')
    .set('redirect_uri', 'http://localhost:4200/callback/')
    .set('scopes', 'user-top-read')
};

const tokenOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  },
  responseType: 'json'
};

const topArtistOptions = {
  url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=1&offset=0',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': '',
  },
};

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getAuthUrl(): string{
    return authorizeOptions.url + '\?' + authorizeOptions.params.toString();
  }

  getToken(code: string): Observable<any> {
    const body = 'grant_type=authorization_code&redirect_uri=http://localhost:4200/callback/&code=' + code + '&client_id=0a405b349c54473d9511630f1faf4c56&client_secret=3b088326038445b0afa0e01abb6c48b3';
    return this.http.post(tokenOptions.url, body, {headers: tokenOptions.headers, responseType: 'json'});
  }

  getTopArtist(token: string): Observable<any>{
    console.log(token);
    topArtistOptions.headers.Authorization = 'Bearer ' + token;
    return this.http.get(topArtistOptions.url, {headers: topArtistOptions.headers, responseType: 'json'});
  }
}


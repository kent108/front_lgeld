import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root'
})
export class pictureService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPictureById(id:number) {
    return this.httpClient.get(`http://localhost:3000/api/pictures/${id}`, { responseType: 'blob' });
  }
  

  postPicture(formData: FormData) {
    return this.httpClient.post<Picture>('http://localhost:3000/api/pictures', formData);
  }
}

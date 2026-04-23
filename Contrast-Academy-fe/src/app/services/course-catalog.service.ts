import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface CourseCatalogItem {
  id: string;
  icon?: string;
  title: string;
  description: string;
  badge?: string;
  buttonText?: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseCatalogService {
  private api = 'http://localhost:5000/api/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseCatalogItem[]> {
    return this.http.get<CourseCatalogItem[]>(this.api);
  }
}

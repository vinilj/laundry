import { Injectable } from '@angular/core';
import { HttpService } from '../http-header/http.service';

@Injectable({
  providedIn: 'root'
})
export class BannersService {
  
  

  constructor(private httpService: HttpService) { }

  uploadMobileBanner(data) {
    return this.httpService.post('files', data)
  }
  getBanners() {
    return this.httpService.get('files')
  }
}

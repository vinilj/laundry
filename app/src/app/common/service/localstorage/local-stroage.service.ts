import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../apilayer/http-header/http.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStroageService {
  constructor(private storage: Storage) { }

  setStorageKey(key, value) {
    // set a key/value
    return this.storage.set(key, value);
  }

  getStoredKey(key) {
    // Or to get a key/value pair
    return this.storage.get(key)
  }

  clearStorage() {
    this.storage.set('authToken', null)
    return this.storage.set('user', null)
  }
}
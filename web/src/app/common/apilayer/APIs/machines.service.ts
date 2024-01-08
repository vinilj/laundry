import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-header/http.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private httpService: HttpService, private cookie: CookieService, private http: HttpClient) { }

  getAllMachines(): Observable<any> {
    const userType = this.cookie.get('userType')
    const franchiseId = this.cookie.get('franchiseId')

    if (userType == "FranchiseAdmin")
      return this.httpService.get('franchises/' + franchiseId + '/machines')
    else
      return this.httpService.get('allMachines')
  }

  getAllFilterMachines(id): Observable<any> {
    const userType = this.cookie.get('userType')
    const franchiseId = this.cookie.get('franchiseId')
    if (id>0)
      return this.httpService.get('franchises/' + id + '/machines')
    else
      return this.httpService.get('allMachines')
  }

  addMachine(data) {
    if(data.operationType=="drop off"){
      data.charges=0;
    }
    return this.httpService.post('franchises/'+data.franchiseId+'/machines', data)
  }

  updateMachineStatus(machineData): Observable<any> {
    return this.http.patch(environment.apiBaseUrl+'machines/'+machineData.id, machineData)

  }

  deleteMachine(machineData): Observable<any> {
    return this.http.delete(environment.apiBaseUrl+'machines/'+machineData, machineData)

  }

}

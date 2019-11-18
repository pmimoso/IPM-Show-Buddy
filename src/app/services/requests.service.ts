import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  //TODO: popular isto c cenas random
  companyRequests: CompanyRequest[] = [ {
    requestOwner: {
    username: "Sandro",
    password: "Sandro",
    birthday: new Date("1998/01/12"),
    tastes: ['Rock', ' Rap',]
    },
    eventName: "Festival da Sardinha",
    minAge: 25,
    maxAge: 35,
    sex: ['Feminino'] 
  },
  {
    requestOwner: {
    username: "Júlia",
    password: "Júlia",
    birthday: new Date("1998/10/19"),
    tastes: ['Ópera', ' Museus', ' Teatros']
    },
    eventName: "Museu dos Coches",
    minAge: 40,
    maxAge: 52,
    sex: ['Masculino', ' Feminino'] 
  },
];

  constructor() { }

  doCompanyRequest(cRequest: CompanyRequest) {
    this.companyRequests.unshift(cRequest);
  }

  getCompanyRequestList() {
    return this.companyRequests;
  }
}

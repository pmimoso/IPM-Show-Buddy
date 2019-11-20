import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  ticketSellRequests: TicketSellRequest[] = [ {
    requestOwner: {
    username: "Sandro_Malandro",
    password: "Sandro",
    birthday: new Date("1946/01/12"),
    profilePic: "assets/0.png",
    tastes: ['Rock', 'Rap',]
    },
    eventName: "Festival da Sardinha",
    price: 50,
    sellLocation: 'Baixa da Banheira',
    negotiable: "Sim" 
  },
  {
    requestOwner: {
    username: "LeonelFragoso",
    password: "Leonel",
    birthday: new Date("1988/08/19"),
    profilePic: "assets/3.png",
    tastes: ['Museus']
    },
    eventName: "Zambujo in Zambujeira",
    price: 25,
    sellLocation: 'Fanqueiro',
    negotiable: "Não" 
  }
];

  //TODO: popular isto c cenas random
  companyRequests: CompanyRequest[] = [ {
    requestOwner: {
    username: "Sandro_Malandro",
    password: "Sandro",
    birthday: new Date("1946/01/12"),
    profilePic: "assets/0.png",
    tastes: ['Rock', 'Rap',]
    },
    eventName: "Festival da Sardinha",
    minAge: 45,
    maxAge: 65,
    sex: ['Feminino'] 
  },
  {
    requestOwner: {
    username: "Julinha1994",
    password: "Júlia",
    birthday: new Date("1994/10/19"),
    profilePic: "assets/1.png",
    tastes: ['Ópera', 'Museus', 'Teatros']
    },
    eventName: "Museu dos Coches - Visita Guiada",
    minAge: 20,
    maxAge: 35,
    sex: ['Masculino', 'Feminino'] 
  },
  {
    requestOwner: {
    username: "NélioSLB",
    password: "Nélio",
    birthday: new Date("1988/05/11"),
    profilePic: "assets/2.png",
    tastes: ['Ópera', 'Museus', 'Teatros']
    },
    eventName: "Panda e os Caricas",
    minAge: 30,
    maxAge: 38,
    sex: ['Feminino'] 
  },
  {
    requestOwner: {
    username: "LeonelFragoso",
    password: "Leonel",
    birthday: new Date("1988/08/19"),
    profilePic: "assets/3.png",
    tastes: ['Museus']
    },
    eventName: "Zambujo in Zambujeira",
    minAge: 30,
    maxAge: 45,
    sex: ['Feminino'] 
  }
];

  constructor() { }

  doCompanyRequest(cRequest: CompanyRequest) {
    this.companyRequests.unshift(cRequest);
  }

  getCompanyRequestList() {
    return this.companyRequests;
  }

  deleteCompanyRequest(requestIndex: number) {
    this.companyRequests.splice(requestIndex, 1);
  }

  getTicketSellRequestList() {
    return this.ticketSellRequests;
  }

  doTicketSellRequest(ticketReq: TicketSellRequest) {
    this.ticketSellRequests.unshift(ticketReq);
  }

  deleteTicketSellRequest(ticketRequestIndex: number) {
    this.ticketSellRequests.splice(ticketRequestIndex, 1);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  showList: Show[] = [
    {
      name: "Festival da Sardinha",
      location: "Moita",
      eventType: "Festival",
      startDate: new Date("2019/08/20"),
      eventImage:"assets/show-sardinha.png"
    },
    {
      name: "Museu dos Coches - Visita Guiada",
      location: "Lisboa",
      eventType: "Museu",
      startDate: new Date("2019/09/11"),
      eventImage:"assets/show-coches.png"
    },
    {
      name: "Romeu e Julieta",
      location: "Lisboa",
      eventType: "Teatro",
      startDate: new Date("2019/11/05"),
      eventImage: "assets/show-romeu.jpg"
    }, {
      name: "Metallica Live in Porto",
      location: "Porto",
      eventType: "Concerto",
      startDate: new Date("2019/10/24"),
      eventImage:  "assets/show-metallica.jpg"
    },
    {
      name: "Panda e os Caricas",
      location: "Vizela",
      eventType: "Festival",
      startDate: new Date("2019/07/29"),
      eventImage:  "assets/show-panda.jpg"
    },
    {
      name: "Zambujo in Zambujeira",
      location: "Zambujeira do Mar",
      eventType: "Concerto",
      startDate: new Date("2019/11/02"),
      eventImage:  "assets/show-zambujo.jpg"
    }
  ];

  constructor() { }

  getAllShows() {
    return this.showList;
  }

  getShowByName(showName: string) {
    return this.showList.find(show => show.name == showName);
  }
}

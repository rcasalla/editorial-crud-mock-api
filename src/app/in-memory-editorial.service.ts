import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryEditorialService implements InMemoryDbService {
  createDb() {
    let editorials = [
      {
        id: 1,
        name: "Oveja Negra"
      },
      {
        id: 2,
        name: "Siruela"
      },
      {
        id: 3,
        name: "Plaza y Janes"
      },
      {
        id: 4,
        name: "Norma"
      }
    ];
    return { editorials };
  }
}

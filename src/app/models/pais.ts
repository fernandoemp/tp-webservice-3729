export class Pais {
  country: string;
  totalRecovered: string;
  totalDeaths: string;
  totalCases: string;
  newCases: string;
  newDeaths: string;
  image: string;



  // tslint:disable-next-line: max-line-length
  Pais(country?: string, totalRecovered?: string, totalDeaths?: string, totalCases?: string, newDeaths?: string, newCases?: string, image?: string) {
    this.country = country;
    this.totalRecovered = totalRecovered;
    this.totalCases = totalCases;
    this.totalDeaths = totalDeaths;
    this.newCases = newCases;
    this.newDeaths = newDeaths;
    this.image = image;

  }
}

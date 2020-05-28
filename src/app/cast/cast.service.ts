import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICastInfo } from '../interfaces/icast-info';
import { map } from 'rxjs/operators';
import { ICastService } from '../interfaces/i-cast-service';

interface ICastDataType {
  person: {
    image: {
      medium: string;
    };
    name: string;
  };
  character: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})

export class CastService implements ICastService{
  constructor(private httpClient: HttpClient) {}

  getCast(showId: number) {
    return this.httpClient
      .get<ICastDataType[]>(
        `${environment.rootUrl}${environment.showendpoint}${showId}/cast`
      )
      .pipe(map((people: ICastDataType[]) => people.map( person => this.transfortmToICast(person))));
  }

  transfortmToICast(data: ICastDataType): ICastInfo {
    return {
      castImg: data.person.image ? data.person.image.medium : "../../assets/images/no-img.png",
      castName: data.person.name,
      characterName: data.character.name,
    };
  }
}

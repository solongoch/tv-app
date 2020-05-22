import { ICastService } from '../interfaces/i-cast-service';
import { ICastInfo } from '../interfaces/icast-info';
import { Observable, of } from 'rxjs';

export class CastServiceFake implements ICastService {
  private fakeCast: ICastInfo = {
    castImg: '',
    castName: 'James Michael Tyler',
    characterName: 'Gunther'
  }

  public getCast(showId: number): Observable<ICastInfo[]>{
    return of(this.fakeCast[0]);
  }
}

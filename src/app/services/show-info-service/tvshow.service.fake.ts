import { Itvshowservice } from './itvshowservice';
import { IShowinfo } from '../../interfaces/ishowinfo';
import { Observable, of } from 'rxjs';

export class TvshowServiceFake implements Itvshowservice {
  private fakeTv: IShowinfo = {
    name: 'Girls',
    image: '',
    description: 'A show about girls',
    country: 'US',
    genre: 'comedy',
    runtime: 22,
    network: 'HBO',
    language: 'English'
  }

  public getShowInfo(id: number) :
  Observable<IShowinfo> {
    return of (this.fakeTv);
  }
}

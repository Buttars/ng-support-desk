import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SupportStore, SupportState } from './support.store';

@Injectable({ providedIn: 'root' })
export class SupportQuery extends QueryEntity<SupportState> {

  constructor(protected store: SupportStore) {
    super(store);
  }

}

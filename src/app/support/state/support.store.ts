import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Support } from './support.model';

export interface SupportState extends EntityState<Support> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'support'
})
export class SupportStore extends EntityStore<SupportState> {

  constructor() {
    super();
  }

}

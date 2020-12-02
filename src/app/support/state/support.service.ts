import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SupportStore } from './support.store';

@Injectable({ providedIn: 'root' })
export class SupportService {
  constructor(private supportStore: SupportStore, private http: HttpClient) {}

  get() {
    return this.http
      .get('')
      .pipe(tap((entities: any) => this.supportStore.set(entities)));
  }
}

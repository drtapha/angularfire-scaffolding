import { Injectable } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable,
  AngularFireDatabase
} from 'angularfire2';

@Injectable()
export class CrudService<T>{
  url: string;

  constructor(private angularFire: AngularFire) {}
  push(item: T) {
    return this.list().push(item); 
  }
  update(key : string, value: T){
    return this.list().update(key, value); 
  }
  remove(key  : string){
    return this.list().remove(key); 
  }
  set(value : T){
    return this.object().set(value); 
  }
  updateObject(value : T){
    return this.object().update(value);
  }
  removeObject(){
    return this.object().remove()
  }
  list(){
    return this.angularFire.database.list(this.url); 
  }
  object(){
    return this.angularFire.database.object(this.url); 
  }
}

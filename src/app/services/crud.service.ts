import { Injectable } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable,
  AngularFireDatabase
} from 'angularfire2';

@Injectable()
export class CrudService<T>{
  protected url: string;

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
  set(url : string, value : T){
    return this.object(url).set(value); 
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
  object(url = this.url){
    return this.angularFire.database.object(url); 
  }
}

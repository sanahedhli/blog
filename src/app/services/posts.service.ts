import { Injectable } from '@angular/core';
import {Poste} from '../models/poste.model';
import * as firebase from 'firebase';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
posts: Poste[] = [];
postSubject = new  Subject<Poste[]>();
  constructor() { }
  emitPosts() {
    this.postSubject.next(this.posts);
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts() {
firebase.database().ref('/posts')
  .on('value', ( data) => {
    this.posts = data.val() ? data.val() : [];
    this.emitPosts();
  });
  }
  getSinglePost(id: number) {
return new Promise(
  (resolve, reject) => {
    firebase.database().ref('/posts/' + id).once('value').then(
      (data) => {
        resolve(data.val());
      }, ( error) => {
        reject( error);
      }
    );
  }
);
  }
  createNewPoste(newPost: Poste) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }
  removePost(post: Poste) {
const  indexElToRemouve = this.posts.findIndex(
   (postEl) => {
    if ( postEl === post) {
      return true;
    }
  }
);
this.posts.splice(indexElToRemouve, 1);
this.savePosts();
this.emitPosts();
  }
}

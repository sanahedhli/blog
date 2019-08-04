import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Poste} from '../models/poste.model';
import {Subscription} from 'rxjs';
import { PostsService} from '../services/posts.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit , OnDestroy {
post: Poste [];
postSubscription: Subscription;
  constructor(private posteService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.posteService.postSubject.subscribe(
      (post: Poste []) => {
        this.post = post;
      }
    );
    this.posteService.getPosts();
    this.posteService.emitPosts();
  }
onDeletePost(post: Poste) {
    this.posteService.removePost(post);
}
onShowPost(id: number) {
this.router.navigate(['/posts', 'view' , id]);
}
  love(post: Poste) {
    const postIndex = this.post.findIndex(
      (postEl) => {
        if (post === postEl) {
          return true;
        }
      }
    );
    const likePlus = post.nombreLike + 1;
    firebase.database().ref('/posts/' + postIndex)
      .update({ title: post.title, description: post.description, nombreLike: likePlus });
    this.posteService.savePosts();
    this.posteService.emitPosts();
  }
  notlove(post: Poste) {
    const postIndex = this.post.findIndex(
      (postEl) => {
        if (post === postEl) {
          return true;
        }
      }
    );
    const likePlus = post.nombreLike - 1;
    firebase.database().ref('/posts/' + postIndex)
      .update({ title: post.title, description: post.description, nombreLike: likePlus });
    this.posteService.savePosts();
    this.posteService.emitPosts();
  }
  OnNewPost() {
    this.router.navigate(['/posts', 'new']);
  }
  getColor() {
    return 'black';
  }
  showDetail() {

  }
ngOnDestroy() {
    this.postSubscription.unsubscribe();
}
}

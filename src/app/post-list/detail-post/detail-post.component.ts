import { Component, OnInit } from '@angular/core';
import {Poste} from '../../models/poste.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {
post: Poste;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.post = new Poste('', '', 0 );
    const id = this.route.snapshot.params[' id'];
    this.postService.getSinglePost(+ id).then(
      (post: Poste) => {
        this.post = post;
      }
    );
  }
  onBack() {
    this.router.navigate(['/posts']);
  }
}

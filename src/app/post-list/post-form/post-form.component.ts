import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {Poste} from '../../models/poste.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private  postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSavePost() {
    const title = this.postForm.get('title').value;
    const description = this.postForm.get('description').value;
    const nbrLike = 0;
    const newPost = new Poste(title, description, nbrLike);
    this.postsService.createNewPoste(newPost);
    this.router.navigate(['/posts']);
  }

}

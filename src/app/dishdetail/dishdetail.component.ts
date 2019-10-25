import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  dishDetailForm: FormGroup;
  comment: Comment;
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  @ViewChild('fform') dishDetailFormDirective;

    //tracks the current errors
    formErrors = {
      'author': '',
      'comment': ''
    };

    validationMessages = {
      'author': {
        'required' :     'Author is required.',
        'minlength':     'Author must be at least 2 characters long.',
      },
      'comment': {
        'required':      'Comment is required.',
      }
    };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL:string) {
      this.createForm();
     }

  ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      //wehn route parameter change value, then the new dish is updated. Observable on the URL param
      this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
      this.createForm();
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    //wrap around index with modulo operator (%)
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm(): void{
    //crete part of the group
    this.dishDetailForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)] ],
      rating: 5,
      comment: ['', [Validators.required] ]
    });
    this.dishDetailForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.dishDetailForm) { return; }
    const form = this.dishDetailForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.comment=this.dishDetailForm.value;
    console.log(this.comment);
    var date = new Date();
    var dateISO = date.toISOString();
    this.comment.date = dateISO;
    this.dish.comments.push(this.comment);
    this.dishDetailFormDirective.resetForm();
    this.dishDetailForm.reset({
      author:'',
      comment:'',
      rating: '5'
    });
  }

}

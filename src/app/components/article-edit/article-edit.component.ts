import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent {
  
  article: Article | null = null;
  // price: Price | null = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private priceService: PriceService

  ) { }

  articleForm: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    // picture_id: [''],
    type_id: [''],
    price: [''],
    format_id: [''],
  });

 

  ngOnInit(): void {
    

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.articleService.getArticleById(id).subscribe((article) => {
        this.article = article;
        this.articleForm.patchValue(article);
      });
    });
  }

  // onSubmit(): void {
  //   if (this.articleForm.valid && this.article) {
  //     const updatedArticle: Article = {
  //       ...this.article,
  //       ...this.articleForm.value,
  //     };
  //     this.articleService.updateArticle(updatedArticle).subscribe((article) => {
  //       console.log(article);
        
  //       this.router.navigate(['articles']);
  //     });

      

  //   }
  //   if (this.priceForm.valid && this.price) {
  //     const updatedPrice: Price = {
  //       ...this.price,
  //       ...this.priceForm.value,
  //     };
  //     this.priceService.updatePrice(updatedPrice).subscribe((price) => {
  //       this.router.navigate(['articles']);
  //     })

  //   }


  
  // }


  onSubmit() {
    // const updateArticle: Article = this.articleForm.value;
    // const test = this.articleForm.value.price;
    // updateArticle.type_id = Number(updateArticle.type_id);
    // const test2 = Number(this.articleForm.value.format_id);

    // this.articleService.updateArticle(updateArticle).subscribe((response) => {
    //   this.articleForm.patchValue({
    //     name: response.name,
    //     description: response.description,
    //     type_id: response.type_id,
    //     price: test,
    //     format_id: test2,
    //   });
    // });

    if (this.articleForm.valid && this.article) {
      const updatedArticle: Article = {
        ...this.article,
        ...this.articleForm.value,
      };
      this.articleService.updateArticle(updatedArticle).subscribe(() => {
        console.log(updatedArticle, "article mis à jour");
        this.router.navigate(['/admin'])
        
      })
    }
  }


}


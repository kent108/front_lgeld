import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Type } from 'src/app/models/type';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private price: PriceService
  ) { }

  articleForm: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    // picture_id: [''],
    type_id: [''],
    price: [''],
    format_id: [''],
  });

  getSelectedType(): Type[] {
    const formValues = this.articleForm.value;
    const type = formValues.type;

    if (formValues.pastry) {
      type.push({ id: 1, descripiton: "Pâtisserie" })
    }
    if (formValues.traiteur) {
      type.push({ id: 2, descripiton: "Traiteur" })
    }

    return type;
  }

  submit() {
    const newArticle: Article = this.articleForm.value;
    console.log(newArticle);
    const test = this.articleForm.value.price;
    newArticle.type_id = Number(newArticle.type_id);
    // newArticle.price = Number(newArticle.price);
    const jeTyperaiMieuxLaProchaineFois = Number(
      this.articleForm.value.format_id
    );
    this.articleService.createArticle(newArticle).subscribe((response) => {
      // response.id
      this.price
        .createPrice({
          article_id: response.id,
          format_id: jeTyperaiMieuxLaProchaineFois,
          price: test,
        })
        .subscribe((response) => {});
      console.log("Article ajouté");
      this.articleForm.reset();
    })
    console.log(newArticle);
    
  }
  
}

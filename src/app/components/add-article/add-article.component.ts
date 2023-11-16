import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article, NewArticle } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
import { Picture } from 'src/app/models/picture';
import { Type } from 'src/app/models/type';
import { ArticleService } from 'src/app/services/article.service';
import { FormatService } from 'src/app/services/format.service';
import { pictureService } from 'src/app/services/picture.service';
import { PriceService } from 'src/app/services/price.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent {
  allTypes: Type[] = [];
  allFormats: Format[] = [];
  subImage$!: Observable<any>;
  title = 'upload_image_front';
  imageToShow: any;
  isImageLoading!: boolean;
  myFile!: File;

  caseCochee = false;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private price: PriceService,
    private typeService: TypeService,
    private pictureService: pictureService,
    private formatService: FormatService
  ) {}

  articleForm: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    picture_id: [''],
    type_id: [''],
    price_mignardise: [''],
    price_individuel: [''],
    price_6Pers: [''],
    format_id_1: [''],
    format_id_2: [''],
    format_id_3: [''],
    picture: [''],
  });

  ngOnInit(): void {
    this.typeService.getTypes().subscribe((types) => {
      this.allTypes = types;
    });

    this.formatService.getAllFormats().subscribe((formats) => {
      this.allFormats = formats;
    });
  }

  goBack(): void {
    this.router.navigate(['/admin'], { relativeTo: this.route });
  } 

  submit() {
    // commenter son code
    const newArticle: NewArticle = {
      name: this.articleForm.value.name,
      description: this.articleForm.value.description,
      type_id: Number(this.articleForm.value.type_id),
      prices: [],
    };

    if (this.articleForm.value.format_id_1) {
      newArticle.prices.push({
        price: this.articleForm.value.price_mignardise,
        format: {
          id: 1,
        },
      });
    }

    if (this.articleForm.value.format_id_2) {
      newArticle.prices.push({
        price: this.articleForm.value.price_individuel,
        format: {
          id: 2,
        },
      });
    }

    if (this.articleForm.value.format_id_3) {
      newArticle.prices.push({
        price: this.articleForm.value.price_6Pers,
        format: {
          id: 3,
        },
      });
    }
    console.log('newArticle', newArticle);

    if (this.myFile) {
      const formData = new FormData();
      formData.append('monFichierKey', this.myFile);

      this.pictureService.postPicture(formData).subscribe((res) => {
        newArticle.picture_id = res.id;
        console.log(newArticle, 'newArticle');

        this.articleService.createArticle(newArticle).subscribe((response) => {
          this.articleForm.reset();
          alert('Article ajouté avec succès');

          this.articleForm.reset();
        });
      });
    }
    // console.log(newArticle);
  }

  onFileChange(e: any) {
    console.log(e.target.files, 'e.target.files');
    this.myFile = e.target.files[0];
    console.log(this.myFile, 'this.myFile');
  }

}

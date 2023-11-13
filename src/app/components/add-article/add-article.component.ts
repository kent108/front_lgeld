import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
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
    price: [''],
    format_id: [''],
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

  submit() {
    const newArticle: Article = { ...this.articleForm.value };
    const test = this.articleForm.value.price;
    newArticle.type_id = Number(newArticle.type_id);
    const format = Number(this.articleForm.value.format_id);

    if (this.myFile) {
      const formData = new FormData();
      formData.append('monFichierKey', this.myFile);

      this.pictureService.postPicture(formData).subscribe((res) => {
        newArticle.picture_id = res.id;
        console.log(newArticle, 'newArticle');

        this.articleService.createArticle(newArticle).subscribe((response) => {
          this.price
            .createPrice({
              article_id: response.id,
              format_id: format,
              price: test,
            })
            .subscribe((priceResponse) => {
            console.log(priceResponse, 'priceResponse');
            console.log('Article ajouté avec succès');
            this.articleForm.reset();
            alert('Article ajouté avec succès'); 
            });

         
          this.articleForm.reset();
        });
      });
    }
    console.log(newArticle);
  }

  

  onFileChange(e: any) {
    console.log(e.target.files, 'e.target.files');
    this.myFile = e.target.files[0];
    console.log(this.myFile, 'this.myFile');
  }

  
}

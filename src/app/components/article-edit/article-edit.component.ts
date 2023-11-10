import { Component, Input } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { FormatService } from 'src/app/services/format.service';
import { pictureService } from 'src/app/services/picture.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
})
export class ArticleEditComponent {
  allFormats: Format[] = [];
  article: Article | null = null;
  // price: Price | null = null;
  articleIdFromRoute!: number;
  formatIdFromRoute!: number;
  pictureIdFromRoute!: number;
  price!: number;
  valueCheckedFormat!: number;

  @Input()
  imageToShow: any;
  isImageLoading!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private priceService: PriceService,
    private formatService: FormatService,
    private pictureService: pictureService
  ) {}

  articleForm: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    type_id: [''],
    picture_id: [''],
    prices: [''],
    format_id: [''],
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.articleService.getArticleById(id).subscribe((article) => {
        this.article = article;
        if (this.article) {
          console.log(this.article);

          this.pictureService
            .getPictureById(this.article.picture_id)
            .subscribe({
              next: (data: Blob) => {
                this.createImageFromBlob(data);
              },
              error: (error) => {
                console.log(error);
              },
            });
        }
      });
    });

    // Récupération des paramètres de l'URL
    const routeParam = this.route.snapshot.paramMap;
    // this.articleIdFromRoute = Number(routeParam.get('id'));
    this.formatIdFromRoute = Number(routeParam.get('id'));
    this.pictureIdFromRoute = Number(routeParam.get('id'));

    this.formatService.getAllFormats().subscribe((formats) => {
      this.allFormats = formats;
    });
  }

  onSubmit() {
    // Update de l'article
    const blabla = {
      name: this.articleForm.value.name,
      description: this.articleForm.value.description,
      type_id: this.articleForm.value.type_id,
      picture_id: this.articleForm.value.picture_id,
    };
    this.articleService
      .updateArticle(blabla, this.articleIdFromRoute)
      .subscribe(() => {});

    // update du format
    console.log(
      "format recup de l'input checkbox : ",
      this.articleForm.value.format_id
    );

    // Update du prix
      


    this.priceService
      .getPricebyFormatAndArticle(
        this.valueCheckedFormat,
        this.article?.id as number
      )
      .subscribe((price) => {
        console.log('garry', this.articleForm.value.prices);
        console.log('price', price.id);
        
        this.priceService
          .updatePriceById(this.articleForm.value.prices, price.id)
          .subscribe(() => {});
      });
  }

  // Reception de l'image pas le blob
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    });
  }

  onCheckboxChange(e : Event) {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      this.valueCheckedFormat = Number(target.value);
      console.log('valueCheckedFormat : ', this.valueCheckedFormat);
    }
  }
}

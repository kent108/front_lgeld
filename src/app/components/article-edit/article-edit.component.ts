import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
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

  // Formulaire de modification d'un article
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
      this.articleIdFromRoute = Number(id);

      // Récupération de l'article par son id
      this.articleService.getArticleById(id).subscribe((article) => {
        this.article = article;
        if (this.article) {
          this.articleForm.patchValue({
            name: this.article.name,
            description: this.article.description,
            picture_id: this.article.picture_id,
          });

          // utilisation du blob pour afficher l'image
          this.pictureService
            .getPictureById(this.article.picture_id)
            .subscribe({
              next: (data: Blob) => {
                this.createImageFromBlob(data);
              },
              error: (error) => {
                
              },
            });
        }
      });
    });

    // Récupération des paramètres de l'URL
    //const routeParam = this.route.snapshot.paramMap;
    // this.articleIdFromRoute = Number(routeParam.get('id'));
    //this.formatIdFromRoute = Number(routeParam.get('id'));
    //this.pictureIdFromRoute = Number(routeParam.get('id'));

    // Récupération du format
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

    // Update du prix
    this.priceService
      .getPricebyFormatAndArticle(
        this.valueCheckedFormat,
        this.article?.id as number
      )
      .subscribe((price) => {
        this.priceService
          .updatePriceById(this.articleForm.value.prices, price.id)
          .subscribe(() => {
            this.router.navigate(['/admin']);
          });
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

  // Récupération de la valeur du format selectionné
  onCheckboxChange(e: Event) {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      this.valueCheckedFormat = Number(target.value);
    }
  }
}

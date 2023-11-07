import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Format } from 'src/app/models/format';
import { Type } from 'src/app/models/type';
import { ArticleService } from 'src/app/services/article.service';
import { FormatService } from 'src/app/services/format.service';
import { pictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  imageToShow: any;
  isImageLoading!: boolean;

  @Input()
  tabArticles: Article[] = [];
  types: Type[] = [];

  @Input() article!: Article;
  @Input() formats!: Format;

  constructor(
    private articleService: ArticleService,
    private pictureService: pictureService,
    private formatService: FormatService
  ) {}

  ngOnInit() {
    if (this.article) {
      this.pictureService.getPictureById(this.article.picture_id).subscribe({
        next: (data: Blob) => {
          this.createImageFromBlob(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    });
  }
}

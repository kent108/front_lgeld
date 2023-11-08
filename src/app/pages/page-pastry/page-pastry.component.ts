import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-page-pastry',
  templateUrl: './page-pastry.component.html',
  styleUrls: ['./page-pastry.component.css'],
})
export class PagePastryComponent implements OnInit {
  pastryArticles!: Article[];
  @Input() price!: Price;
  

  constructor(
    private articleService: ArticleService,
    private priceService: PriceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.articleService.getAllArticles().subscribe((formats) => {
      this.pastryArticles = formats;
    })

    
  }
}

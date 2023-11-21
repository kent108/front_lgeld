import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Price } from 'src/app/models/price';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';
import { PriceService } from 'src/app/services/price.service';
import { pictureService } from 'src/app/services/picture.service';
import * as emailjs from '@emailjs/browser';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  totalPrice: number = 0;
  @Input() article!: Article;
  cartDevis!: Article[];

  constructor(
    private cartService: CartService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cartDevis = this.cartService.getItems();
    // console.log(this.cartDevis);
    this.cartService.cartDevis$.subscribe((cartDevis) => {
      this.cartDevis = cartDevis;
      console.log('ici', cartDevis);
    });
  }

  // supprimer un article du local storage et recharge la page
  removeItem(article: Article) {
    this.cartService.removeItem(article);
  }

  clearCart() {
    this.cartDevis = this.cartService.clearCart();
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voulez-vous envoyer la demande de devis?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sendEmailDevis(event);      
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmation',
          detail: "La demande a été envoyée",
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Annulation',
          detail: 'La demande a été annulée',
        });
      },
    });
  }

  sendEmailDevis(e: Event) {
    e.preventDefault();

    // Récupère l'e-mail depuis le formulaire
    const userEmail = (document.getElementById('email') as HTMLInputElement)
      .value;

    // Configure les paramètres pour l'envoi d'e-mail
    const serviceID = 'service_6mz454f';
    const templateID = 'template_cr0mx79';
    const userID = 'FY1LT97hgJtKEL0-J';

    // Paramètres de l'email à envoyer
    const params = {
      to_email: 'lesgoutsetlesdouceurs01@gmail.com',
      subject: 'Demande de devis',
      name: 'Ebru',
      email: userEmail,
      body: this.cartDevis
        .map(
          (item) =>
            `${item.name} - ${item.prices
              .map((price) => `${price.format.size}: ${price.price} €`)
              .join(', ')}`
        )
        .join('\n'),
    };
    console.log('E-mail Body:', params.body);

    // Envoie l'e-mail avec EmailJS
    emailjs
      .send(serviceID, templateID, params, userID)
      .then((response) => {
        console.log('Email envoyé avec succès:', response);
        // Ajoute ici la logique supplémentaire après l'envoi de l'e-mail si nécessaire
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error);
        // Ajoute ici la logique pour gérer les erreurs d'envoi d'e-mail si nécessaire
      });
  }

  formatBody(userEmail: string): string {
    const cartDevisInfo = this.cartDevis
      .map((item) => {
        const itemName = item.name;
        const pricesInfo = item.prices
          .map((price) => {
            const formatName = price.format.size;
            const priceValue = price.price;
            return `${formatName}: ${priceValue} €`;
          })
          .join(', ');

        return `${itemName} - ${pricesInfo}`;
      })
      .join('\n');

    return `
    Produits :
    ${cartDevisInfo}

    Email client : ${userEmail}
  `;
  }

  // Méthode pour formater les produits dans le corps de l'e-mail
  formatProducts(): string {
    // Implémente cette méthode pour formater la liste des produits
    // Utilise this.cartDevis et autres données nécessaires
    // Exemple fictif :
    return this.cartDevis
      .map((item) => `${item.name} - ${item.prices} €`)
      .join('\n');
  }

  // // Méthode pour calculer le total du panier
  // calculateTotal(): number {
  //   // Implémente cette méthode pour calculer le total du panier
  //   // Utilise this.cartDevis et autres données nécessaires
  //   // Exemple fictif :
  //   return this.cartDevis.reduce((total, item) => total + item.prices, 0);
  // }
}

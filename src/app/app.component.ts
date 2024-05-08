import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { localQuotes } from './quote';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'quote-generator';


  // apiQuotes = [];
  showLoader = false;
  showQuoteContainer = true;
  authorText = '';
  quoteText = '';
  longQuote = false;

  newQuote() {
    const quote: any = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if (!quote.author) {
      this.authorText = 'Unknown';
    } else {
      this.authorText = quote.author;
    }
    this.longQuote = quote.text.length > 120;

    this.quoteText = quote.text;
  }


  ngOnInit(): void {
    this.newQuote();
  }

  tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${this.quoteText} - ${this.authorText}`;
    window.open(twitterUrl, '_blank');
  }
}

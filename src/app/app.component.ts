import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assigment-book-app';

  searchText: string = '';
  selectedCategory: string = '';
  newBookTitle: string = '';
  newBookAuthor: string = '';
  favorite: boolean = false;

  books = [
    { title: 'Life of Pi', author: 'Davan', category: 'Novel' },
    { title: 'Học code today', author: 'FPT', category: 'Education' },
    {
      title: 'Learn Angular by Example',
      author: 'FPT Aptech',
      category: 'Programming',
    },
    { title: 'Họ nhà trai', author: 'Nguyễn Anh Tú', category: 'Fiction' },
    {
      title: 'Đôi mắt có lửa',
      author: 'Nguyễn Hùng Sơn',
      category: 'Thriller',
    },
  ];

  get filteredBooks() {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addBook() {
    if (this.newBookTitle && this.newBookAuthor) {
      this.books.push({
        title: this.newBookTitle,
        author: this.newBookAuthor,
        category: 'Unknown',
      });
      this.newBookTitle = '';
      this.newBookAuthor = '';
    }
  }
}

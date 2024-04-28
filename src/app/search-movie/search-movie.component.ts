import { Component } from '@angular/core';
import { Search } from '../models/search.movie';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  standalone: true,
  imports: [],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent {
  newSearch = this.fb.group({
    identifiant: ['', Validators.required],
    titre: "",
    type: ["", "", ""],
    annee: 1,
    fiche: ["", ""],
  });

  ngOnInit() {
    this.newSearch.valueChanges
      .subscribe(value => {
        console.log('newSearch value changes : ', value);
      })
  }

  constructor(private fb: FormBuilder) { }
  onsubmit() {
    console.log('newSearch submitted : ', this.newSearch.value);
  }
}


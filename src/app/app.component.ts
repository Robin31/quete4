import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { MenuComponent } from './menu/menu.component';
import { SingupComponent } from './singup/singup.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    MenuComponent,
    SingupComponent,
    SearchMovieComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pimpoye';
}

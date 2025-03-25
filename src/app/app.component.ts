import { Component } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { MetaService } from './services/meta/meta.service';
import { combineLatest, filter, map, mergeMap, tap } from 'rxjs';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wfs-client';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService
  ) { 
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => combineLatest([route.data, route.queryParams])),
        tap(([data]) => {
          const { title, description } = data as Data;
          this.metaService.updateTitle(title);
          this.metaService.updateDescription(description);
        })
      ).subscribe();
  }
}

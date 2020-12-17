import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() searchString: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  public search() {

    if (this.searchString) {

      this.router.navigate(['/minis'], { queryParams: { searchString: this.searchString }});

    }

  }
}

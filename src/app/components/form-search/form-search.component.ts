import { Component } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {

  onSearch(input:string){

    if (input && input.length > 3) {
      // this.router.navigate(['/character-list'], {
        //   queryParams: { q: value },
        console.log(input);
      };

  }

  
  


}

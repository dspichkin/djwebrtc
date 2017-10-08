import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'blank',
  templateUrl: 'blankLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BlankLayoutComponent {

  public ngOnInit():any {
  }

  public onResize(){
  }

}

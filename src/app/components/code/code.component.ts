import { Component, Input } from '@angular/core';

@Component({
  selector: 'highlight',
  template: `
    <pre>
        <code [highlight]="code" [lineNumbers]="lineNumbers" [languages]="languages"></code>
    </pre>
  `,
})
export class CodeComponent {
  @Input() code: string;
  @Input() languages: string[];
  @Input() lineNumbers: boolean;
}

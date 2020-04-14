import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { LocalStorageService } from '../../../root-module/services/local-storage.service';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit, AfterViewInit {
  public text: string;
  @Input() public numberOfFields: number;
  @ViewChild('focus') private focusField: ElementRef;

  constructor(private localStorageService: LocalStorageService,
              private filterText: FilterPipe) {
  }

  public ngOnInit(): void {
    const text = this.localStorageService.get('text');
    this.text = this.filterText.transform(text, this.numberOfFields);
  }

  public ngAfterViewInit(): void {
    this.focusField.nativeElement.focus();
  }

  public trackByFn(index: number): number {
    return index;
  }

  public changeText(text: string, item: number): void {
    let innerText = '';
    for (let i = 0; i < this.numberOfFields; i++) {
      if (i === item) {
        innerText += text;
      } else {
        innerText += this.text[i];
      }
    }

    this.localStorageService.set('text', innerText);
    this.text = this.filterText.transform(innerText, this.numberOfFields);
    (document.getElementById(item.toString()) as HTMLInputElement).value = this.text[item];
  }

}

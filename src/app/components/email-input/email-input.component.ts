import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EmailInputComponent),
    multi: true
  }]
})
export class EmailInputComponent implements OnInit, ControlValueAccessor {
  @Input() value: string | null = null;

  get innerValue(): any {
    return this.value;
  }

  set innerValue(value) {
    if (value !== this.value) {
      this.writeValue(value);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.innerValue = this.value || '';
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  onChange = (val: any) => { };
  onTouched = () => { };

  registerOnChange(fn: (val: any) => void): void {
    this.onChange = (val: any) => {
      fn(val);
    };
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

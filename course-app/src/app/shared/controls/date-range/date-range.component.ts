import { Component, forwardRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';

export interface Value {
    from: number;
    to: number;
}

export interface Placeholder {
    from: string;
    to: string;
}

@Component({
    selector: 'app-date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateRangeComponent),
            multi: true
        }
    ]
})
export class DateRangeComponent implements OnInit, ControlValueAccessor {

    @Input() placeholder!: Placeholder;
    @Output() changed = new EventEmitter<Value>();

    form!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            from: [null],
            to: [null],
        });
    }

    get min(): number {
        const from = this.form.controls.from.value;
        return new Date(from).getTime() + 24*60*60*1000;
    }

    get max(): number  {
        const to = this.form.controls.to.value;
        const temp = (new Date()).getTime() + 24*60*60*1000;
        return new Date(to).getTime() + 24*60*60*1000;
    }

    private propagateChange: any = () => { };
    private propagateTouched: any = () => { };

    writeValue(value: Value): void {
        this.form.patchValue(value || {});
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    onChanged(): void {
        const value = { ...this.form.value };

        this.propagateChange(value);
        this.changed.emit(value);
    }

    onClosed(): void {
        this.propagateTouched();
    }

}

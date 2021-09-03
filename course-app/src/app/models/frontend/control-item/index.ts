import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Icon } from "../icon";


export type Value = number | string | boolean;

export interface ControlItem {
    value: Value;
    label: string;

    icon?: Icon; // Optional
}
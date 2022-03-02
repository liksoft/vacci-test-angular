import { Component, HostBinding, Input } from "@angular/core";
import { MultidimentionalArray } from "src/app/config/partials-configs";

@Component({
  selector: "[m-dimentional-view]",
  templateUrl: "./m-dimentional-view.component.html",
})
export class MultiDimentionalViemComponent {
  @Input()
  value: MultidimentionalArray = [];

  @HostBinding("class._array")
  get isArray(): boolean {
    return Array.isArray(this.value);
  }
}

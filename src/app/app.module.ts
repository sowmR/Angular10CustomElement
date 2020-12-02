import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { DisplayTextComponent } from './display-text/display-text.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTextComponent
  ],
  imports: [BrowserModule],
  exports: [DisplayTextComponent],
  providers: [],
  bootstrap: [],
  entryComponents: [DisplayTextComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(DisplayTextComponent, { injector: this.injector});
    customElements.define('display-text', el);
  }
}

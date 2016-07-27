import {
  describe,
  expect,
  inject,
  it,
  async,
  TestComponentBuilder,
  beforeEachProviders,
} from '@angular/core/testing';

import { AppComponent } from './app.component';

// TODO: update to arrow functions for simplicity
describe('app.component unit tests', function() {
  beforeEachProviders(function() {
    return [AppComponent]
  });

  it('should work', async(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    return tcb.createAsync(AppComponent).then(function (fixture) {
      var instance = fixture.componentInstance;
      expect(instance.greeting).toEqual("Hello");
    });
  })));

});

/* eslint-disable no-undef */
import { expect } from '@esm-bundle/chai';

import { helloJS } from '../src/hello';

describe('Test van de hello.js', () => {
  it('de functie helloJS zou de string "Hello JavaScript" terug moeten geven', () => {
    expect(helloJS()).to.be.equal('Hello JavaScript');
  });
});

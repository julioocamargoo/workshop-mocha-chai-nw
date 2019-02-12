const assert = require('assert');
const { somar } = require('../operacoes');

describe('usando módulo assert do nodejs', function() {
  describe('somar()', function() {
    it('é esperado que retorne 5 como resultado', function() {
      const resultado = somar(2, 3);
      assert.equal(resultado, 5);
    });
    it('é esperado que retorne -3 como resultado', function() {
      const resultado = somar(-4, 1);
      assert.equal(resultado, -3);
    });
    it('é esperado que o retorno seja do tipo número', function() {
      const resultado = somar(1, 1);
      assert(typeof resultado === 'number');
    });
    it('é esperado que retorne um erro se um dos valores não for um número', function() {
      assert.throws(function () { somar('a', 2); }, Error);
    });
  });
});
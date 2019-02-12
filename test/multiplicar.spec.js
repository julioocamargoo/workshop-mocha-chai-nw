const { assert } = require('chai');
const { multiplicar } = require('../operacoes');

describe('usando assert do chai', function() {
  describe('multiplicar()', function() {
    it('é esperado que retorne 5 como resultado', function() {
      const resultado = multiplicar(1, 5);
      assert.equal(resultado, 5);
    });
    it('é esperado que retorne -3 como resultado', function() {
      const resultado = multiplicar(-1, 3);
      assert.equal(resultado, -3);
    });
    it('é esperado que o retorno seja do tipo número', function() {
      const resultado = multiplicar(1, 4);
      assert.typeOf(resultado, 'number');
    });
    it('é esperado que retorne um erro se um dos valores não for um número', function() {
      assert.throws(function() { multiplicar('a', 2); }, Error);
    });
  });
});
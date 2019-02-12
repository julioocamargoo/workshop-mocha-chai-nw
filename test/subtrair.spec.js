const { expect } = require('chai');

const { subtrair } = require('../operacoes');

describe('usando expect do chai', function() {
  describe('subtrair()', function() {
    it('é esperado que retorne 5 como resultado', function() {
      const resultado = subtrair(15, 10);
      expect(resultado).to.be.equal(5);
    });
    it('é esperado que retorne -3 como resultado', function() {
      const resultado = subtrair(-7, -4);
      expect(resultado).to.be.equal(-3);
    });
    it('é esperado que o retorno seja do tipo número', function() {
      const resultado = subtrair(10, 2);
      expect(resultado).to.be.a('number');
    });
    it('é esperado que retorne um erro se um dos valores não for um número', function() {
      expect(function() { subtrair('a', 2); }).to.throw(Error);
    });
  });
});
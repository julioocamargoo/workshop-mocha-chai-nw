const chai = require('chai');
const { dividir } = require('../operacoes');

const should = chai.should();

describe('usando chai com o estilo \'should\'', function() {
  describe('dividir()', function() {
    it('é esperado que retorne 5 como resultado', function() {
      const resultado = dividir(10, 2);
      resultado.should.equal(5);
    });
    it('é esperado que retorne -3 como resultado', function() {
      const resultado = dividir(9, -3);
      resultado.should.equal(-3)
    });
    it('é esperado que o retorno seja do tipo número', function() {
      const resultado = dividir(10, 2);
      resultado.should.be.a('number');
    });
    it('é esperado que retorne um erro se um dos valores não for um número', function() {
      (function() { dividir('a', 2) }).should.throw(Error);
    });
    it('é esperado que retorne um erro se o divisor for 0', function() {
      (function() { dividir(10, 0) }).should.throw(Error);
    });
  });
});
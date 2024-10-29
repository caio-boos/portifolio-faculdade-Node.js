const assert = require('assert');
const { soma } = require('../math');

describe('Função Soma', () => {
    it('Deve retornar 5 quando somar 2 e 3', () => {
        assert.strictEqual(soma(2, 3), 5);
    });
    it('Deve retornar -1 quando somar -2 e 1', () => {
        assert.strictEqual(soma(-2, 1), -1);
    });
    it('Deve retornar 0 quando somar 0 e 0', () => {
        assert.strictEqual(soma(0, 0), 0);
    });
});

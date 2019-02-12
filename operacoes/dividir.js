const dividir = (dividendo, divisor) => {
    if(typeof dividendo !== 'number' || typeof divisor !== 'number') throw new Error('Um dos valores não é válido');
    if(divisor === 0) throw new Error('O divisor não pode ser 0');
    return (dividendo / divisor);
};

module.exports = dividir;

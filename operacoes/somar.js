const somar = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('Um dos valores não é válido');
    return (num1 + num2);
};

module.exports = somar;

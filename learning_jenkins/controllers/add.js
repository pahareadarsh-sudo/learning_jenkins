const { add } = require("./calculator");

const add = (req, res) => {

    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const result = add(num1, num2);

    res.send(`The sum of ${num1} and ${num2} is ${result}`);

}

module.exports = add;
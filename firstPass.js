// module

const add =(a,b) =>{
    return a+b;
};

const multiply =(a,b) =>{
    return a*b;
};

const sub =(a,b) =>{
    return a-b;
};

const divide =(a,b) =>{
    return a/b;
};

// module.exports = add;  ek khali export karvu hoy to aa use karavanu 6e.

// multipel value import karvi hoy tyare aa rite thase
module.exports = {
    add,
    multiply,
    divide,
    sub
}
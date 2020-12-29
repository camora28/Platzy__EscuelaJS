// before ES6

function newFunction(name, age, country) {
    var name = name || 'camora';
    var age = age || 32;
    var country = country || 'CO';
    console.log(name, age, country);
}

//after ES6

function newFunction2 (name = 'camora', age = 32, country = 'CO') {
    console.log (name, age, country);
};

newFunction2();
newFunction2('valentina', 16, 'CO');
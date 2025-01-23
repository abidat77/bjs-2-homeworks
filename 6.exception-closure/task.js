let numPurchases = prompt();

function parseCount(x) {
  let y = parseFloat(x);
   if(isNaN(y)) {
        throw new Error('Невалидное значение');
   }
    else {
        return y;
    }
}

function validateCount(x) {
    try {
        return parseCount(x);
    } catch (error) {
        return error;
    }
}
validateCount(numPurchases);


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return +area;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } 
    catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}


const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter); 
console.log(triangle1.area);


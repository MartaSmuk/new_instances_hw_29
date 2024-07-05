// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    personalInfo() {
        console.log(`Owner's name is ${this.name}, owner is ${this.age} years old.`);
    } 
}

const Serge = new Person('Serge', 32);
const Anna = new Person('Anna', 23);
const Vova = new Person('Vova', 22);
Serge.personalInfo();


class Car {
    owner = "";
    constructor(brand, model, production_year, license_plate) {
        this.brand = brand;
        this.model = model;
        this.production_year = production_year;
        this.license_plate = license_plate;
    }
    assignOwner(person) {
        if(person.age > 18) {
            this.owner = person;
        } else {
            console.log("You are too yong, you cannot own a car jet!")
        }
    }
    carInfos() {
        console.log(`
                    Car brand: ${this.brand}, 
                    car model: ${this.model}, 
                    prod. year of the car: ${this.production_year}, 
                    car license plate: ${this.license_plate}
                    `);
        this.owner.personalInfo();       
    }

}

const audi = new Car("audi", "A7", 2017, "BC54789");
const lambo = new Car("lamborgini", "Miura", 1972, "BC58697");
const ferrari = new Car("ferrari", "Monza SP", 2019, "BC56211");
audi.assignOwner(Serge);
lambo.assignOwner(Anna);
ferrari.assignOwner(Vova);

console.log(audi);

console.log(audi.carInfos());
console.log(lambo.carInfos());
console.log(ferrari.carInfos());
//simple example

let a = {
    name: "Gurgen",
    age: 34,
    "show": function(){
        console.log(this.age)
    }
    
}

let b = {
    surname: "Harutyunyan",
    __proto__ : a
}

let c = {
    phone: "+37498281810",
    __proto__ : b
}


console.log(c);
console.log(c.show());
console.log(b.age)
//console.log(c.hasOwnProperty(phone));  // stugum enq ka ed hatkutyun@ te voch(true/false hamapatasxanabar)




// eg by animal inheritance

function Animal (name,color){
    this.name = name;
    this.color = color;
}

function Mammal (name, color){
    Animal.call (this,name,color);
}

Object.setPrototypeOf(Mammal.prototype, Animal.prototype)

Animal.prototype.sound = function(){
    return `${this.name} make a sound`;
}

Mammal.prototype.walk = function(){
    return `${this.name} is can walk`;
}

const rodents = new Mammal ("rodents are carnivores too")

console.log(rodents.sound());
console.log(rodents.walk());


//inheritance pattern for cars

function Auto(brand, prise, gas){
    this.brand = brand,
    this.prise = prise,
    this.gas = gas,
    this.drive = function(){
        if(this.gas> 0){
            this.gas = this.gas - 10;
            console.log(this.gas);
        }else{
           console.log("fuel ran out");
        }
    }
}

const mazda = new Auto("brand:MAZDA","price:8.000$", 50)

 Auto.prototype.engine = function(){
    console.log('start')
 }

const bmw = new Auto ("brand:BMW", "prise:12.000$", 70)
Auto.prototype.signal = function(){
    console.log("reports a signal")
}


 console.log(mazda.engine())
 console.log(bmw.signal());
// mazda.drive()
// mazda.drive()
// mazda.drive()
// mazda.drive()
// mazda.drive()
// mazda.drive()


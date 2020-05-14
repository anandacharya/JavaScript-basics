class Animal {

    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name+' eats food');
    }
}

class Aligator extends Animal{
    eats(){
        super.eats();
        console.log(this.name+' eats fishes');
    }
}

let murphy = new Aligator('murphy');
murphy.eats(); //method overriding - parent class method is overridden by child class method

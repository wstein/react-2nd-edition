class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            (description += ` Their Major is ${this.major}.`);
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        if (this.hasHomeLocation()) {
            return `${super.getGreeting()} I'm visiting from ${this.homeLocation}.`;
        } else {
            return super.getGreeting();
        }
    }
}

let me = new Student('Werner', 54, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getGreeting());
console.log(me.getDescription());

let other = new Student();
console.log(other.hasMajor());
console.log(other.getGreeting());
console.log(other.getDescription());

me = new Traveler('Werner', 54, 'Ludwigsburg');
console.log(me.hasHomeLocation());
console.log(me.getGreeting());
console.log(me.getDescription());

other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.hasHomeLocation());
console.log(other.getGreeting());
console.log(other.getDescription());
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log(“Running is fun! - said no one ever”);
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can’t accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }
    learnLanguage(language) {
        this.languages.push(language);
    }
    listLanguages() {
        console.log(`${this.name} knows: ${this.languages.join(“, “)}`);
    }
}
let Brandon = new Person(“Brandon”, “back-end developer”, 25);
Brandon.exercise();
Brandon.fetchJob();
let hank = new Programmer(“hank”, “front-end developer”, 30, [“JavaScript”, “CSS”, “HTML”]);
hank.exercise();
hank.fetchJob();
hank.offerNewTask();
hank.completeTask();
hank.offerNewTask();
hank.learnLanguage(“TypeScript”);
hank.listLanguages();
white_check_mark
eyes
raised_hands::skin-tone-4









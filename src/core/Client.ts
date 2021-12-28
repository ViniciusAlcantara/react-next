export default class Client {
    private id: string
    private name: string
    private age: Number

    constructor (name: string, age: Number, id: string = null) {
        this.id = id
        this.age = age
        this.name = name
    }

    static empty() {
        return new Client('', 0)
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }
}
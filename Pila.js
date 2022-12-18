class Pila{
    constructor (){
        this.pila = [];
    }

    push(element){
        this.pila.push(element);
        return this.pila;
    }

    pop = () => {
        return this.pila.pop();
    }
    
    isempty = () => {
        return this.pila.length === 0;
    }

    empty = () => {
        this.pila.length = 0;
    }

    size = () => {
        return this.pila.length;
    }
}
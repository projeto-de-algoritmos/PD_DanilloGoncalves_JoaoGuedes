import Items from './items';
class Knapsack{
    constructor(){
        this.result_matrix = [[]];
        this.max_weight = 0;
        this.items = [];
    }
    init(){
        for(let i=0; i<this.max_weight; i++){
            this.result_matrix[0][i] = 0;
        }
    }
    setItems(qtd, values, weights){
        for(let i=0; i<qtd; i++){
            this.items = [...this.items, Item]
        }
    }
    run(){

    }
}
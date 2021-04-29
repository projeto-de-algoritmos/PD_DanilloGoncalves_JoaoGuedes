import Item from './item';
class Knapsack{
    constructor(){
        this.result_matrix = [[]];
        this.max_weight = 0;
        this.items = [];
        this.size = 0;
    }
    setItems(qtd, values, weights){
        for(let i=0; i<qtd; i++){
            this.items = [...this.items, Item(weights[i], values[i])];
        }
        this.size = this.items.length;
    }
    init(){
        for(let i=0; i<this.max_weight; i++){
            this.result_matrix[0][i] = 0;
        }
        for(let i=0; i<this.size; i++){
            this.result_matrix[i][0] = 0;
        }
    }
    run(){
        for(let i=1; i<this.size; i++){
            for(let j=1; j<this.max_weight; j++){
                if(this.items[i].size>this.max_weight)
                    this.result_matrix[i][j] = M[i-1, j];
                else
                this.result_matrix[i][j] = Math.max(M[i-1, j], this.items[i].value+M[i-1, this.items[i].value - this.max_weight]);

            }
        }
    }
}
import Item from './item';
export default class Knapsack{
    constructor(){
        this.result_matrix = {};
        this.max_weight = Math.ceil(Math.random() * (100 - 10) + 10);
        this.items = [];
        this.size = 0;
        this.answer = 0;
        this.setItems();
    }
    setItems(){
        for(var i=0; i<8; i++){
            const weight = Math.ceil(Math.random() * ((this.max_weight/3)- 3) + 10);
            const value = Math.ceil(Math.random() * (300 - 1) + 1);
            this.items.push(new Item(weight, value));
        }
        this.size = this.items.length;
        this.init();
    }
    init(){
        for(let i=0; i<this.max_weight; i++){
            this.result_matrix[`0${i}`] = 0;
        }
        for(let i=0; i<this.size; i++){
            this.result_matrix[`${i}0`] = 0;
        }
    }
    run(){
        for(var i=1; i<this.size; i++){
            for(var j=1; j<this.max_weight; j++){
                if(this.items[i].weight>j){
                    this.result_matrix[`${i}${j}`] = this.result_matrix[`${i-1}${j}`];
                }
                else{
                    this.result_matrix[`${i}${j}`] = Math.max(this.result_matrix[`${i-1}${j}`], (this.items[i].value +
                                                                                     this.result_matrix[`${i-1}${j - this.items[i].weight}`]
                                                                                     ));
                }

            }
        }
        this.answer = this.result_matrix[`7${this.max_weight-1}`];
    }
}
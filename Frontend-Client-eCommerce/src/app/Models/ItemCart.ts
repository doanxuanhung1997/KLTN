import{} from "@angular/compiler";

export class ItemCart{
    tp_id:number;
    tp_name:String;
    tp_price:number;
    tp_color:String;
    tp_img:String;
    tp_count:number;

    constructor(tp_id:number,tp_name:String,tp_price:number,tp_color:String,tp_img:String, tp_count:number) {
        this.tp_id=tp_id;
        this.tp_name=tp_name;
        this.tp_price=tp_price;
        this.tp_color=tp_color;
        this.tp_img=tp_img;
        this.tp_count=tp_count;
    }
}
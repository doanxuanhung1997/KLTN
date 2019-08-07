<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\Bill;
use App\Models\BillDetail;
use App\Models\InforOrder;
use App\Models\Phone;

class BillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Bill::get();
    }

    
    public function show($id)
    {
        $info_bill=DB::table('bill')
            ->leftJoin('infororder', 'bill.io_id', '=', 'infororder.io_id')
            ->where('bill.b_id',$id)
            ->get();

        $p = BillDetail::where('b_id',$id)->select('p_id')->get();

        $list_order = DB::table('phone')
            ->leftJoin('typephone', 'phone.tp_id', '=', 'typephone.tp_id')
            ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
            ->select('p_id','p_color', 'phone.tp_id','tp_name','tp_price','tp_discount','phonecompany.pc_id','pc_name')
            ->whereIn('phone.p_id',$p)
            ->get();

        return response()->json([
            'info_bill'=>$info_bill,
            'list_order'=>$list_order 
        ],200);
    }

    
    public function cofirm(Request $request)
    {
        $b = Bill::find($request->b_id);
        $b->status=$request->status;
        $b->diliver=$request->diliver;
          
        $p_bill = BillDetail::where('b_id',$request->b_id)->select('p_id')->get();

        if($request->diliver==1){
            foreach ($p_bill as $key) {
                $phone=Phone::find($key->p_id);
                $phone->p_status=1;
                $phone->save();
            }
        }else {
             foreach ($p_bill as $key) {
                $phone=Phone::find($key->p_id);
                $phone->p_status=0;
                $phone->save();
            }
        }

        $b->save();
           
         return response()->json([
            'message'=>'Cofirm success'
        ],200);
    }


    public function deletePhoneOrder(Request $request)
    {
        $phone=BillDetail::where('p_id',$request->p_id)->get()->each->delete();

        $p = BillDetail::where('b_id',$request->b_id)->select('p_id')->get();

        $list_order = DB::table('phone')
            ->leftJoin('typephone', 'phone.tp_id', '=', 'typephone.tp_id')
            ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
            ->select('p_id','p_color', 'phone.tp_id','tp_name','tp_price','tp_discount','phonecompany.pc_id','pc_name')
            ->whereIn('phone.p_id',$p)
            ->get();

        $total_bill=0;
        foreach ($list_order as $item) {
            $total_bill=$total_bill+$item->tp_price;
        }

        $bill=Bill::find($request->b_id);
        $bill->total_price=$total_bill;
        $bill->save();

        return response()->json([
            'message'=>'Update list order success',
            'list_order'=>$list_order,
            'total_bill'=>$total_bill
        ],200);
    }

    //client
    function addBill(Request $request){
        // get id Customer new 
        $idmax = InforOrder::whereRaw('io_id = (select max(io_id) from infororder)')->first();
        $cart= $request->input('item');
        $total=0;
        foreach ($cart as $item) {   
            $total+=$item['tp_price']*$item['tp_count'];
        }
        $ldate = date('Y-m-d');
        // add new bill
        $b=new Bill;
        $b->io_id=$idmax->io_id;
        $b->date_order=$ldate;
        $b->date_finish=null;
        $b->status=0;
        $b->diliver=0;
        $b->total_price=$total;
        $b->save();
        $idBill = Bill::whereRaw('b_id = (select max(b_id) from bill)')->first();
        foreach ($cart as $item) {   
            $color=$item['tp_color'];
            $count=$item['tp_count'];
            $typephone=$item['tp_id'];
            $price=$item['tp_price'];
            $data=Phone::where([
                            ['tp_id','=',$typephone],
                            ['p_color','=',$color]
                        ])->inRandomOrder()->take($count)->get();
            foreach ($data as $dt ) {
                $billdetail=new BillDetail;
                $billdetail->b_id=$idBill->b_id;
                $billdetail->p_id=$dt->p_id;
                $billdetail->count=1;
                $billdetail->unit_price=$price;
                $billdetail->save();
            }
        }
        return 1;
    }
}

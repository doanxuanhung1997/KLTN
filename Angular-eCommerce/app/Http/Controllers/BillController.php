<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Models\Phone;
use App\Models\BillDetail;
use Illuminate\Http\Request;
use DB;

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
            ->leftJoin('infororder', 'bill.b_id', '=', 'infororder.io_id')
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
}

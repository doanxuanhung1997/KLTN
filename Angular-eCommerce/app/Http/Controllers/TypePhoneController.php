<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypePhone;
use App\Models\PhoneCompany;
use DB;

class TypePhoneController extends Controller
{
    function getListSaleProducts(){
    	$records=TypePhone::all();
    	return response()->json($records);
    }
    function getListNewProducts(){
    	$records=TypePhone::all();
    	return response()->json($records);
    }
    function getListProducts(Request $request){
        $id=$request->input('tp_id');
        $records=TypePhone::where('pc_id',$id)->get();
        return response()->json($records);
            return 1;

    }
    function getDetailProduct(Request $request){
            return 1;
        
        $id=$request->input('tp_id');
        $record=TypePhone::find($id);
        return response()->json($record);

    	$id=$request->input('id');
    	$records=TypePhone::where('tp_id',$id)->get();
    	return response()->json($records);
    }
    function getListPageNewPr(){
        $records=TypePhone::all();
        return response()->json($records);
    }
    function getListPageSalePr(){
        $records=TypePhone::all();
        return response()->json($records);
    }

    //serve
    function get_list(){
       $tp = DB::table('typephone')
            ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
            ->get();
        return $tp;
    }

    function add_typephone(Request $request){
        $tp= new TypePhone();
        $tp->tp_name = $request->tp_name;
        $tp->pc_id = $request->pc_id;
        $tp->tp_describe = $request->tp_describe;
        $tp->tp_price = $request->tp_price;
        $tp->tp_img1 = $request->tp_img1;
        $tp->tp_img2 = $request->tp_img2;
        $tp->tp_img3 = $request->tp_img3;
        $tp->tp_img4 = $request->tp_img4;
        $tp->tp_img5 = $request->tp_img5;
        $tp->tp_screen = $request->tp_screen;
        $tp->tp_operating_system = $request->tp_operating_system;
        $tp->tp_rear_camera = $request->tp_rear_camera;
        $tp->tp_front_camera = $request->tp_front_camera;
        $tp->tp_CPU = $request->tp_CPU;
        $tp->tp_RAM = $request->tp_RAM;
        $tp->tp_memory = $request->tp_memory;
        $tp->tp_battery = $request->tp_battery;
        $tp->tp_discount = $request->tp_discount;
        $tp->save();

        return 1;
    }

    function delete_typephone(Request $request){
        if ($request->tp_id != null) {
            $tp = TypePhone::find($request->tp_id);
            $tp->delete();    
           return 2;
        }
    }
}

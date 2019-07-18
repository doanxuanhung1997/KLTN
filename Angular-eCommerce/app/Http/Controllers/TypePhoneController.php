<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypePhone;
use App\Models\Phone;
use App\Models\PhoneCompany;
use DB;

class TypePhoneController extends Controller
{
    function getListSaleProducts(){
        $records=TypePhone::where('tp_discount', '<>', 0)->get();
        return response()->json($records);
    }
    function getListNewProducts(){
        $records=TypePhone::all();
        return response()->json($records);
    }
    function getListProducts(Request $request){
        $id=$request->input('pc_id');
        $records=TypePhone::where('pc_id',$id)->get();
        return response()->json($records);
    }
    function getListColorProducts(Request $request){
        $id=$request->input('tp_id');
        $records=DB::table('Phone')
                ->Select('p_color',DB::raw('Count(p_color) AS c_count'))
                ->where([['tp_id', '=', $id]])->groupBy('p_color')->get();
        return response()->json($records);
    }
    function getListSearchByName(Request $request){
        $name=$request->input('name');
        $records=TypePhone::where('tp_name', 'LIKE', "%$name%")->get();
        return response()->json($records);
    }
    function getListProductsSearch(Request $request){
        $id=$request->input('pc_id');
        $records=TypePhone::where('pc_id',$id)->get();
        $idSearch=$request->input('idSear');

        $price=0;$pricefrom=0;$priceto=0;
        if($idSearch==0){
            $records=TypePhone::where('pc_id',$id)->get();
            return response()->json($records);
        }
        else if($idSearch==1){
            $records = DB::table('TypePhone')
                        ->where([
                        ['pc_id', '=', $id],
                        ['tp_price', '<', 2000000]
                        ])->get();
            return response()->json($records);
        }else if($idSearch==2){
            $pricefrom=2000000;$priceto=6000000;
        }else if($idSearch==3){
            $pricefrom=6000000;$priceto=10000000;
        }else if($idSearch==4){
            $pricefrom=10000000;$priceto=15000000;
        }else if($idSearch==5){
            $pricefrom=15000000;$priceto=20000000;
        }else if($idSearch==6){
            $records = DB::table('TypePhone')
                        ->where([
                        ['pc_id', '=', $id],
                        ['tp_price', '>', 20000000]
                        ])->get();
            return response()->json($records);
        }
        $records = DB::table('TypePhone')
                        ->where([
                        ['pc_id', '=', $id],
                        ['tp_price', '>', $pricefrom],
                        ['tp_price', '<', $priceto]
                        ])->get();
        return response()->json($records);
    }
    function getDetailProduct(Request $request){
        $id=$request->input('tp_id');
        $record=TypePhone::find($id);
        return response()->json($record);
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

        return response()->json([
            'message'=>'Created typephone new success !',
            'typephone'=>$tp
        ],200);
    }

    function editTypePhone(Request $request){
        $tp=TypePhone::find($request->tp_id);
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

        return response()->json([
            'message'=>'Updated typephone success !',
            'typephone'=>$tp
        ],200);
    }

    function delete_typephone(Request $request){
        if ($request->tp_id != null) {
            $tp = TypePhone::find($request->tp_id);
            $tp->delete();    
            return response()->json([
                'message'=>'Deleted typephone success !'
            ],200);
        }
    }

    function getTypePhone($id){
        $tp = DB::table('typephone')
            ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
            ->where('typephone.tp_id',$id)
            ->get();

        return response()->json([
            'typephone'=>$tp
        ],200);
    }

    function getListPhone($id){
        $lp=Phone::where('phone.tp_id',$id)->orderBy('p_color', 'asc')->get();
        return response()->json([
            'listphone'=>$lp
        ],200);
    }

    function addPhone(Request $request){
        $p= new Phone();
        $p->tp_id=$request->tp_id;
        $p->p_color=$request->p_color;
        $p->p_status=0;
        $p->p_date_add=date('Y-m-d');

        $p->save();
        return response()->json([
            'phone'=>$p,
            'message'=>'Created new phone success'
        ],200);
    }

    function deletePhone(Request $request){
        $p=Phone::find($request->p_id);
        $p->delete();   
         return response()->json([
            'message'=>'Deleted phone success'
        ],200);    }
}

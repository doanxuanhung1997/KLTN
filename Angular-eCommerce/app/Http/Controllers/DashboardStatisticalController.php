<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;
use App\Models\Account;
use App\Models\Roles;
use \Illuminate\Http\Response;
use App\Models\TypePhone;
use App\Models\Phone;
use App\Models\PhoneCompany;
use DB;


class DashboardStatisticalController extends Controller
{
    function getDataDashboard(){
    	$totalAccount = DB::table('users')->count();
    	$admin=DB::table('users')->where('id_role',1)->count();
    	$employees=DB::table('users')->where('id_role',2)->count();
    	$totalPhone=DB::table('phone')->where('p_status',0)->count();
    	$totalBill=DB::table('bill')->where('diliver',0)->count();
    
    	return response()->json([
            'totalAccount'=>$totalAccount,
            'admin'=>$admin,
            'employees'=>$employees,
            'totalPhone'=>$totalPhone,
            'totalBill'=>$totalBill
        ],200);
    }

    function getPhoneChart(){
    	$phonecompany=DB::table('phonecompany')->select('pc_name')->get();

    	$namePC=[];
    	$PhoneAvailable=[];
		$PhoneSold=[];

        foreach ($phonecompany as $key) {
        	array_push($namePC,$key->pc_name);
        	array_push($PhoneAvailable, 
        		DB::table('phone')
			        ->leftJoin('typephone', 'phone.tp_id', '=', 'typephone.tp_id')
			        ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
			        ->select('p_id','p_color','p_status','phone.tp_id','tp_name','phonecompany.pc_id','pc_name')
			        ->where('phone.p_status',0)
			        ->where('pc_name',$key->pc_name)
			        ->count()
			    );

        	array_push($PhoneSold, 
        		DB::table('phone')
			        ->leftJoin('typephone', 'phone.tp_id', '=', 'typephone.tp_id')
			        ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
			        ->select('p_id','p_color','p_status','phone.tp_id','tp_name','phonecompany.pc_id','pc_name')
			        ->where('phone.p_status',1)
			        ->where('pc_name',$key->pc_name)
			        ->count()
			    );

        }

        return response()->json([
            'namePC'=>$namePC,
            'PhoneAvailable'=>$PhoneAvailable,
            'PhoneSold'=>$PhoneSold
        ],200);
    }

    function getPhoneAvailableChart(){

		$phonecompany=DB::table('phonecompany')->select('pc_name')->get();
		$PhoneAvailable=[];

        foreach ($phonecompany as $key) {
        	array_push($PhoneAvailable, (object)[
		        'name' => $key->pc_name,
		        'y' => DB::table('phone')
					        ->leftJoin('typephone', 'phone.tp_id', '=', 'typephone.tp_id')
					        ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
					        ->select('p_id','p_color','p_status','phone.tp_id','tp_name','phonecompany.pc_id','pc_name')
					        ->where('phone.p_status',0)
					        ->where('pc_name',$key->pc_name)
					        ->count()
							]);
        }
        return $PhoneAvailable;
    }

    function getPhoneSoldChart(){
		$phonecompany=DB::table('phonecompany')->select('pc_name')->get();
		$PhoneSold=[];

        foreach ($phonecompany as $key) {
        	array_push($PhoneSold, (object)[
		        'name' => $key->pc_name,
		        'y' => DB::table('phone')
					        ->leftJoin('typephone', 'phone.tp_id', '=', 'typephone.tp_id')
					        ->leftJoin('phonecompany', 'typephone.pc_id', '=', 'phonecompany.pc_id')
					        ->select('p_id','p_color','p_status','phone.tp_id','tp_name','phonecompany.pc_id','pc_name')
					        ->where('phone.p_status',1)
					        ->where('pc_name',$key->pc_name)
					        ->count()
							]);
        }
        return $PhoneSold;
    }


    function getTotalPhoneSold(Request $request){
    	$phone = DB::table('bill')->where('diliver',1)
    			->rightJoin('billdetail', 'bill.b_id', '=', 'billdetail.b_id')
            	->whereMonth('date_order', $request->month)->count();
    	return $phone;
    }

    function getTotalBill(Request $request){
    	$bill=DB::table('bill')->whereMonth('date_order', $request->month)->count();
    	return $bill;
    }

    function getRevenue(Request $request){
    	$revenue=DB::table('bill')->where('diliver',1)->whereMonth('date_order', $request->month)->sum('total_price');
    	return $revenue;
    }

    function getTotalSalary(){
    	$salary = DB::table('users')->sum('salary');

    	$phone = DB::table('bill')->where('diliver',1)
    			->rightJoin('billdetail', 'bill.b_id', '=', 'billdetail.b_id')
            	->count();

    	$bill=DB::table('bill')->count();

    	$revenue=DB::table('bill')->where('diliver',1)->sum('total_price');

    	return response()->json([
            'totalSalary'=>$salary,
            'totalPhone'=>$phone,
            'totalBill'=>$bill,
            'totalRevenue'=>$revenue
        ],200);
    }
}

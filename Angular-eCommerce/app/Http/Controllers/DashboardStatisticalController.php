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

    function getTotalPhoneSold(Request $request){

    }

    function getTotalBill(Request $request){
    	
    }

    function getRevenue(Request $request){
    	
    	
    }

    function getTotalSalary(){
    	
    }
}

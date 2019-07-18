<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InforOrder;
use App\Models\BillDetail;
use DB;

class CustomerController extends Controller
{
    function addCustomer(Request $request){
    	$cus=new InforOrder;
    	$cus->fullname=$request->input('fullname');
    	$cus->address=$request->input('address');
    	$cus->phone=$request->input('phone');
    	$cus->gmail=$request->input('gmail');
    	$cus->gender=$request->input('gender');
    	$cus->save();
    	return 1;
    }
}

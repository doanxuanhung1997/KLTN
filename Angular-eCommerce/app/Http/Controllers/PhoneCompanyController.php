<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PhoneCompany;
class PhoneCompanyController extends Controller
{
	//Client
    function getListCategories(){
    	$records=PhoneCompany::all();
    	// return response()->json($records);
    	return $records->toJson();

    }
    //Server Admin

    //get list
    function get_list(){
    	return PhoneCompany::get();
    }

    function delete($id){
        if ($id != null) {
            $product = PhoneCompany::find($id);
            $product->delete();    
           return 1;
        }
    }

    function create(Request $request){
        
    	$pc = new PhoneCompany();
    	$pc->pc_name=$request->pc_name;
    	$pc->pc_logo=$request->pc_logo;
    	$pc->save();
    	return 1;
    }
}

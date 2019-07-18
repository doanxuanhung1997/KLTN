<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ReviewsPhone;
class ReviewsPhoneController extends Controller
{
    function getListReviewsProducts(Request $request){
        $id=$request->input('tp_id');
        $records=ReviewsPhone::where('tp_id',$id)->get();
        return response()->json($records);
    }
    function addReviewPhone(Request $request){
    	$tp_id= $request->input('tp_id');
    	$fullname= $request->input('fullname');
    	$gmail= $request->input('gmail');
    	$content=$request->input('content');
    	$count_stars=$request->input('count_stars');

    	$rp=new ReviewsPhone();
    	
    	$rp->tp_id=$tp_id;
    	$rp->fullname=$fullname;
    	$rp->gmail=$gmail;
    	$rp->content=$content;
    	$rp->count_stars=$count_stars;
    	$rp->save();
    	return $rp;
    }
}

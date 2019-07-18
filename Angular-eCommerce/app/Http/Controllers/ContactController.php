<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    function addNewContact(Request $request){
    	$name= $request->input('name');
    	$email= $request->input('email');
    	$phone=$request->input('phone');
    	$content=$request->input('content');

    	$contact=new Contact();
    	$contact->name=$name;
    	$contact->email=$email;
    	$contact->phone=$phone;
    	$contact->content=$content;
    	$contact->save();
    	return 1;
    }
}

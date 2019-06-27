<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Angular Shop Phone Mobile
Route::get('getListCategories','PhoneCompanyController@getListCategories');
Route::get('getListSaleProducts','TypePhoneController@getListSaleProducts');
Route::get('getListNewProducts','TypePhoneController@getListNewProducts');
Route::post('getDetailProduct','TypePhoneController@getDetailProduct');
Route::post('getListProducts','TypePhoneController@getListProducts');
Route::get('getListPageSalePr','TypePhoneController@getListPageSalePr');
Route::get('getListPageNewPr','TypePhoneController@getListPageNewPr');


//Server Shop Phone Mobile
Route::get('getPhoneCompany','PhoneCompanyController@get_list');
Route::get('deletePhoneCompany/{id}','PhoneCompanyController@delete');
Route::post('addPhoneCompany','PhoneCompanyController@create');

Route::get('getListTypePhone','TypePhoneController@get_list');
Route::post('addTypePhone','TypePhoneController@add_typephone');
Route::post('deleteTypePhone','TypePhoneController@delete_typephone');

//API News
Route::post('addNews','NewsController@create');
Route::post('updateNews','NewsController@update');
Route::get('showNews/{id}','NewsController@show');
Route::get('getNews','NewsController@index');
Route::delete('deleteNews','NewsController@destroy');

//API Account
Route::post('addAccount','UsersControllers@create');
Route::post('deleteAccount','UsersControllers@destroy');
Route::get('getListAccount','UsersControllers@index');
Route::get('getAccount/{id}','UsersControllers@getAccount');
Route::post('editAccount','UsersControllers@editAccount');


//API user
Route::post('login','AuthController@login');
Route::get('logout','UsersControllers@logout');
Route::post('changepass/{id}','UsersControllers@changepass');
Route::post('edit_profile','UsersControllers@edit_profile');

Route::get('getListBill','BillController@index');
Route::post('addBill','BillController@create');


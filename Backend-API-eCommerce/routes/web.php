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
Route::get('getListNews','NewsController@getListNews');

Route::get('getListSaleProducts','TypePhoneController@getListSaleProducts');

Route::get('getListNewProducts','TypePhoneController@getListNewProducts');

Route::post('getDetailProduct','TypePhoneController@getDetailProduct');

Route::post('getDetailCategory','PhoneCompanyController@getDetailCategory');

Route::post('getListProducts','TypePhoneController@getListProducts');
Route::post('getListRelatedProducts','TypePhoneController@getListRelatedProducts');

Route::post('getListProductsSearch','TypePhoneController@getListProductsSearch');
Route::post('getListSearchByName','TypePhoneController@getListSearchByName');
Route::post('getListColorProducts','TypePhoneController@getListColorProducts');

Route::post('getListReviewsProducts','ReviewsPhoneController@getListReviewsProducts');

Route::get('getListPageSalePr','TypePhoneController@getListPageSalePr');

Route::get('getListPageNewPr','TypePhoneController@getListPageNewPr');

Route::post('addReviewPhone','ReviewsPhoneController@addReviewPhone');
Route::post('addNewContact','ContactController@addNewContact');

Route::post('addBill','BillController@addBill');
Route::post('addCustomer','CustomerController@addCustomer');




//Server Shop Phone Mobile
Route::get('getPhoneCompany','PhoneCompanyController@get_list');
Route::get('deletePhoneCompany/{id}','PhoneCompanyController@delete');
Route::post('addPhoneCompany','PhoneCompanyController@create');

Route::get('getListTypePhone','TypePhoneController@get_list');
Route::post('addTypePhone','TypePhoneController@add_typephone');
Route::post('editTypePhone','TypePhoneController@editTypePhone');
Route::post('deleteTypePhone','TypePhoneController@delete_typephone');
Route::get('getTypePhone/{id}','TypePhoneController@getTypePhone');
Route::get('getListPhone/{id}','TypePhoneController@getListPhone');

Route::post('addPhone','TypePhoneController@addPhone');
Route::post('deletePhone','TypePhoneController@deletePhone');

//API News
Route::post('addNews','NewsController@create');
Route::post('updateNews','NewsController@update');
Route::get('showNews/{id}','NewsController@show');
Route::get('getNews','NewsController@index');
Route::post('deleteNews','NewsController@destroy');

//API Account
Route::get('getRoles','UsersControllers@getRoles');
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

//API Bill
Route::get('getListBill','BillController@index');
Route::get('showBill/{id}','BillController@show');
Route::post('cofirm','BillController@cofirm');
Route::post('deletePhoneOrder','BillController@deletePhoneOrder');

//API Dashboard
Route::get('getDataDashboard','DashboardStatisticalController@getDataDashboard');
Route::get('getPhoneChart','DashboardStatisticalController@getPhoneChart');
Route::get('getPhoneAvailableChart','DashboardStatisticalController@getPhoneAvailableChart');
Route::get('getPhoneSoldChart','DashboardStatisticalController@getPhoneSoldChart');

Route::post('getTotalPhoneSold','DashboardStatisticalController@getTotalPhoneSold');
Route::post('getTotalBill','DashboardStatisticalController@getTotalBill');
Route::post('getRevenue','DashboardStatisticalController@getRevenue');
Route::get('getTotalSalary','DashboardStatisticalController@getTotalSalary');




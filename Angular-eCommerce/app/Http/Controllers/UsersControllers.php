<?php

namespace App\Http\Controllers;
use \Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\Roles;
use Illuminate\Support\Facades\Auth;
use DB;
use JWTAuth;
use Hash;
class UsersControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       
        $data = DB::table('users')
                    ->leftJoin('roles', 'users.id_role', '=', 'roles.id_role')
                    ->select('id_account as id','email', 'fullname','type_role')
                    ->get();

        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        $account = new Account;
        $account->email = $request->email;
        $account->id_role = $request->id_role;
        $account->password =  bcrypt($request->password);
        $account->birthday = $request->birthday;
        $account->fullname = $request->fullname;
        $account->phone = $request->phone;
        $account->address = $request->address;
        $account->image = $request->image;
        $account->salary = $request->salary;

        $account->save(); //Lưu lại

        return response()->json(['message' => 'create account success !'],200);
    }

    public function logout()
    {
         return response()->json(['message' => 'logout success !'],200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
       if ($request->id_account != null) {
            $account = Account::find($request->id_account);
            $account->delete();    
           return 2;
        }
    }
}

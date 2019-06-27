<?php

namespace App\Http\Controllers;
use \Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\Roles;
use Illuminate\Support\Facades\Auth;
use DB;
use Hash;
class UsersControllers extends Controller
{
    
    public function index(Request $request)
    {
       
        $data = DB::table('users')
                    ->leftJoin('roles', 'users.id_role', '=', 'roles.id_role')
                    ->select('id_account as id','email', 'fullname','type_role')
                    ->get();

        return $data;
    }

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
   
    public function changepass(Request $request, $id)
    {
        $users=Account::find($id);
        if (Hash::check($request->passOld, $users->password))
        {
            $users->password=bcrypt($request->passNew);
            $users->save();
            return response()->json(['message' => 'Change password success !'],200);
        }
        else
        {
           return response()->json(['message' => 'Current password is incorrect !'],401);
        }
    }
    
    
    public function edit_profile(Request $request)
    {
        $account=Account::find($request->id_account);

        $account->birthday = $request->birthday;
        $account->fullname = $request->fullname;
        $account->phone = $request->phone;
        $account->address = $request->address;
        $account->image = $request->image;
        $account->salary = $request->salary;

        $account->save();

        return response()->json([
            'user'=>$account,
            'message'=>'Profile has been updated !'  
        ]);
    }

    public function getAccount($id)
    {
        $data = DB::table('users')
                    ->where('users.id_account',$id)
                    ->leftJoin('roles', 'users.id_role', '=', 'roles.id_role')
                    ->select('id_account','email', 'fullname','type_role','salary','phone','address','birthday','image')
                    ->get();
        return response()->json([
            'user'=>$data
        ],200);

    }

    public function editAccount(Request $request)
    {
        $account=Account::find($request->id_account);

        $account->birthday = $request->birthday;
        $account->fullname = $request->fullname;
        $account->phone = $request->phone;
        $account->address = $request->address;
        $account->image = $request->image;
        $account->salary = $request->salary;
        if($request->password != "")
        {
            $account->password=bcrypt($request->password);
        }
        $account->save();

        return response()->json([
            'user'=>$account,
            'message'=>'Profile account has been updated !'  
        ],200);
    }

    public function destroy(Request $request)
    {
       if ($request->id_account != null) {
            $account = Account::find($request->id_account);
            $account->delete();    
           return response()->json(['message' => 'Delete account success !'],200);
        }
    }
}

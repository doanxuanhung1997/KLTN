<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table='users';
    protected $primaryKey= 'id_account';
    protected $guarded=[];

    protected $hidden = [
        'password', 'remember_token',
    ];
}

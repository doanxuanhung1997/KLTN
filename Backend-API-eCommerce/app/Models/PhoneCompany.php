<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhoneCompany extends Model
{
    protected $table='PhoneCompany';
    protected $primaryKey='pc_id';
    public $timestamps = false;
    protected $guarded=[];
    // protected $fillable = ['pc_id', 'pc_name', 'pc_logo'];
}

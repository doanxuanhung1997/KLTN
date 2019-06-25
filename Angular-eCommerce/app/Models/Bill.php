<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    protected $table='bill';
    protected $primaryKey='b_id';
    protected $guarded=[];
}

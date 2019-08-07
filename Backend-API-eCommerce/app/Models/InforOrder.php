<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InforOrder extends Model
{
    protected $table='InforOrder';
    protected $primaryKey='io_id';
    protected $guarded=[];
    public $timestamps = false;
    
}

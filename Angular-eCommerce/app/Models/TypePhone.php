<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypePhone extends Model
{
    protected $table='typephone';
    public $timestamps = false;
    protected $primaryKey='tp_id';
    protected $guarded=[];
}

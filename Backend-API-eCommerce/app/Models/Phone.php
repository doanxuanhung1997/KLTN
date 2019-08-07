<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $table='Phone';
    protected $primaryKey='p_id';
    public $timestamps = false;
    protected $guarded=[];
}

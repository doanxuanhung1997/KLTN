<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReviewsPhone extends Model
{
    protected $table='ReviewsPhone';
    protected $primaryKey='r_id';
    protected $guarded=[];
    public $timestamps = false;
}

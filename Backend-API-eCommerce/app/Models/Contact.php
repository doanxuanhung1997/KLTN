<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table='Contact';
    protected $primaryKey='contact_id';
    protected $guarded=[];
    public $timestamps = false;
}

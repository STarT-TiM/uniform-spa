<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PDesign extends Model
{
    //
    protected $table = 'p_designs';
    protected $fillable = ['name', 'data', 'product_id', 'user_id', 'ip', 'cookie'];
}

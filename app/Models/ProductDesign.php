<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductDesign extends Model
{
    //
    protected $table = 'product_designs';
    protected $fillable = ['name', 'data', 'product_id', 'user_id', 'ip', 'cookie'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $table = 'products';
    protected $fillable = ['code', 'name', 'price','description','features','fabric','sizes','colors','quantity','image','type',
        'map_size'];
}

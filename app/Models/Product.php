<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = ['code', 'name', 'price','description','features','fabric','sizes','color','quantity','type',
        'map_size'];
}

<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;
use App\Models\Product;

class ItemController extends Controller
{
    public function store(Request $request)
    {
        $pathFile = Storage::disk('public')->put('/image-item', $request->file);
        $url = Storage::url($pathFile);

        return response()->json([
            'status-code' => 200,
            'message' => 'OK',
            'data' => $url,
        ]);
    }
}

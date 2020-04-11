<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contract\UserRepositoryInterface;
use App\Repositories\Contract\ProductDesignRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class DesignController extends Controller
{
    private $userRepo;
    private $productDesign;

    public function __construct(
        UserRepositoryInterface $userRepo,
        ProductDesignRepositoryInterface $productDesignRepo
    )
    {
        $this->middleware('admin');
        $this->userRepo = $userRepo;
        $this->productDesignRepo = $productDesignRepo;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //dd(Auth::user());
        //
        //dd($this->productDesignRepo->all());
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $this->productDesignRepo->create([
            'name' => $request->name,
            'data' => json_encode([
                'images' => $request->images,
                'texts' => $request->texts
            ]),
            'product_id' => $request->product,
            'user_id' => $user->id,
        ]);
        return response()->json([
            'code' => 200,
            'message' => 'OK',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = $this->productDesign->find($id);
        return response()->json([
            'code' => 200,
            'message' => 'OK',
            'data' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

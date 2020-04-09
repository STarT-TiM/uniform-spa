<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PDesign;
use App\Repositories\Contract\UserRepositoryInterface;
use App\Repositories\Contract\PDesignRepositoryInterface;

class DesignController extends Controller
{
    private $userRepo;
    private $productDesign;


    public function __construct(
        UserRepositoryInterface $userRepo,
        PDesignRepositoryInterface $productDesign

    )
    {
        $this->userRepo = $userRepo;
        $this->productDesign = $productDesign;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        dd($this->productDesign->all());
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
        $productDesign = PDesign::create([
            'name' => '123',
            'data' => json_encode([
                'images' => $request->images,
                'texts' => $request->texts
            ]),
            'product_id' => $request->product,
            'user_id' => null,
            'id' => '127.0.0.1',
            'cookie' => null,
        ]);
        return response()->json([
            'status-code' => 200,
            'message' => 'OK',
            'data' => json_decode($productDesign),
        ]);
        //dd($productDesign);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /** @var $model Model */
    protected $model;

    /** @var Builder $query */
    protected $query;

    public function __construct()
    {
        $this->model= new Category;
        $this->query = $this->model->query();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Category::whereNull('parent_id')->with('children')->get();
        return response()->json([
            'status-code' => 200,
            'message' => 'OK',
            'data' => $categories,
        ]);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->only($this->model->getFillable());
        $result = $this->query->create($data);
        return response()->json(['status' => 'success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $cate = Category::find($id);
        if ($cate) {
            return response()->json([
                'status-code' => 200,
                'message' => 'successful',
                'data' => $cate,
            ]);
        } else
            return response()->json([
                'status-code' => 404,
                'message' => 'Not Found',
                'data'  =>  null
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request, $id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $data = $request->toArray();
        if (isset($data['id'])) unset($data['id']);
        $item = $this->query->where('id', $id)->first();
        if (!$item) return response()->json(['status' => 'error'], 404);
        $item->fill($data);
        $item->save();

        return response()->json(['status' => 'success'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}

<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contract\UserRepositoryInterface;
use App\Repositories\Contract\ProductDesignRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class UserDesignController extends Controller
{
    private $userRepo;
    private $productDesignRepo;

    public function __construct(
        UserRepositoryInterface $userRepo,
        ProductDesignRepositoryInterface $productDesignRepo
    )
    {
        $this->middleware('admin');
        $this->userRepo = $userRepo;
        $this->productDesignRepo = $productDesignRepo;
    }

    public function getUserDesign() {
        $design = $this->productDesignRepo->getByUserId(Auth::user()->id);
        return response()->json([
            'code' => 200,
            'message' => 'OK',
            'data' => $design
        ]);
    }

}

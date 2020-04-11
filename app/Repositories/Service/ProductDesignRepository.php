<?php

namespace App\Repositories\Service;

use App\Repositories\Contract\ProductDesignRepositoryInterface;
use App\Repositories\Service\BaseRepository;
use App\Models\ProductDesign;

class ProductDesignRepository extends BaseRepository implements ProductDesignRepositoryInterface
{
    public $model;

    public function __construct(ProductDesign $pDesign)
    {
        $this->model = $pDesign;
        parent::__construct($pDesign);
    }

    public function getByUserId($userId) {
        return $this->model->where('user_id', $userId)->get();
    }

}

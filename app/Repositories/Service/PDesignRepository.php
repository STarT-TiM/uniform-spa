<?php

namespace App\Repositories\Service;

use App\Repositories\Contract\PDesignRepositoryInterface;
use App\Repositories\Service\BaseRepository;
use App\Models\PDesign;

class PDesignRepository extends BaseRepository implements PDesignRepositoryInterface
{
    public $model;

    public function __construct(PDesign $pDesign)
    {
        $this->model = $pDesign;
        parent::__construct($pDesign);
    }
}

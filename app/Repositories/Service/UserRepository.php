<?php

namespace App\Repositories\Service;

use App\Repositories\Contract\UserRepositoryInterface;
use App\Repositories\Service\BaseRepository;
use App\User;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    public $model;

    public function __construct(User $user)
    {
        $this->model = $user;
        parent::__construct($user);
    }
}

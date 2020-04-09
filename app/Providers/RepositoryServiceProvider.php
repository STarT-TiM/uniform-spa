<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contract\UserRepositoryInterface;
use App\Repositories\Service\UserRepository;

use App\Repositories\Contract\PDesignRepositoryInterface;
use App\Repositories\Service\PDesignRepository;


class RepositoryServiceProvider extends ServiceProvider
{

    public $bindings = [
        UserRepositoryInterface::class => UserRepository::class,
        PDesignRepositoryInterface::class => PDesignRepository::class,
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

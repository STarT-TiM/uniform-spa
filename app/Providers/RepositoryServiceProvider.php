<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contract\UserRepositoryInterface;
use App\Repositories\Service\UserRepository;

use App\Repositories\Contract\ProductDesignRepositoryInterface;
use App\Repositories\Service\ProductDesignRepository;


class RepositoryServiceProvider extends ServiceProvider
{

    public $bindings = [
        UserRepositoryInterface::class => UserRepository::class,
        ProductDesignRepositoryInterface::class => ProductDesignRepository::class,
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

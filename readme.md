## Base
https://raw.githubusercontent.com/cretueusebiu/laravel-vue-spa

## Features

- Laravel 6.0
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification and password reset
- Authentication with JWT
- Socialite integration
- Bootstrap 4 + Font Awesome 5

## Installation

- `git clone git@github.com:STarT-TiM/uniform-spa.git`
- `composer install`
- Edit `.env` and set your database connection details
- `php artisan migrate`
- import file .sql from `database\scripts\database.sql` 

        //TODO: create migrations

- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `npm install`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Socialite

This project comes with GitHub as an example for [Laravel Socialite](https://laravel.com/docs/5.8/socialite).

To enable the provider create a new GitHub application and use `https://example.com/api/oauth/github/callback` as the Authorization callback URL.

Edit `.env` and set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` with the keys form your GitHub application.

For other providers you may need to set the appropriate keys in `config/services.php` and redirect url in `OAuthController.php`.

## Email Verification

To enable email verification make sure that your `App\User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.

//TODO: change css for admin and front separate
//TODO: change layout of studio
//TODO: upload image in admin: upload to folder upload/... of folder public

## upload seed
composer dump-autoload
php artisan db:seed --class=ProductsTableSeeder


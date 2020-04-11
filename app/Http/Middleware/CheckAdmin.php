<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::user() && Auth::user()->role === 1) {
            return $next($request);
        } else {
            return response()->json([
                'code' => 401,
                'message' => 'Access is denied due to have not permission',
            ]);
        }
    }
}

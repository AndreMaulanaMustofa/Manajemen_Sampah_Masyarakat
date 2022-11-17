<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use Inertia\Middleware;
use App\Models\Category;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $carts_global_count = $request->user() ? Cache::rememberForever('carts_global_count', fn () => Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count()) : null;
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => (new Ziggy)->toArray(),
            'categories_global' => Cache::rememberForever('categories_global', fn () => Category::whereHas('products')->get()->map(fn ($q) => [
                'name' => $q->name,
                'slug' => $q->slug,
            ])),
            'carts_global_count' => $carts_global_count,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\HistoryResource;
use App\Models\Cart;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $carts = Cart::query()
            ->whereBelongsTo($request->user())
            ->latest()
            ->paginate()
            ->withQueryString();
        return inertia('History', [
            'carts' => HistoryResource::collection($carts),
        ]);
    }
}

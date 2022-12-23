<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
use App\Http\Resources\UserProductResource;
use Illuminate\Support\Facades\Storage;
use ImageKit\ImageKit;

class ProductController extends Controller

{
    public $categories;

    public function __construct()
    {
        $this->categories = Category::select('id', 'name')->get();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->select('id', 'price', 'slug', 'name', 'picture', 'category_id')
            ->paginate(12)
            ->withQueryString();

        // return ProductResource::collection($products);
        return inertia('Products/Index', [
            'products' => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Products/Create', [
            'categories' => $this->categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $picture = $request->file('picture');

        $new_name = rand() . '.' . $picture->getClientOriginalExtension();
        $picture->move(public_path('images/products/'), $new_name);

        $public_key = env('IMAGEKIT_KEY');
        $your_private_key = env('IMAGEKIT_PRIVATE_KEY');
        $url_end_point = env('IMAGEKIT_ENDPOINT');

        $imageKit = new ImageKit(
            $public_key,
            $your_private_key,
            $url_end_point
        );

        // Upload Image - Binary
        $uploadFile = $imageKit->uploadFile([
            "file" => fopen(public_path('images/products') . '/' . $new_name, "r"),
            "fileName" => $new_name
        ]);

        $picture_new = $uploadFile ? $uploadFile->result->url : null;

        $product = $request->user()->products()->create([
            'name' => $name = $request->name,
            'slug' => $slug = str($name)->slug(),
            'price' => $request->price,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'url' => $slug,
            'picture' => $picture_new
        ]);
        return to_route('products.index', $product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Product $product)
    {
        $isProductBought = $request->user() ? $request->user()->products()->find($product->id) : null;
        return inertia('Products/Show', [
            'product' => ProductSingleResource::make($product->load('category')),
            'isProductBought' => $isProductBought,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    public function mine(Request $request)
    {
        $products = $request->user()->products()
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return inertia('Products/Mine', [
            'products' => UserProductResource::collection($products),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}

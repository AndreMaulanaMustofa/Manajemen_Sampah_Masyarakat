<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'price' => $price = $this->price,
            'price_tax' => (int) round((11/100) * $price, 0) + $price,
            'product' => [
                'name' => $this->product->name,
                'slug' => $this->product->slug,
            ],
            'created_at' => $this->created_at->format('d F Y, H:i'),
        ];
    }
}

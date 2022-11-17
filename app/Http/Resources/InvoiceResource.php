<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
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
            'order_id' => $this->order_id,
            'qr_code' => $this->payment_type !== 'bank_transfer' ? $this['payment_info']['qr_code'] : null,
            'bank' => $this->payment_type == 'bank_transfer' ? [
                'name' => $this->payment_info['bank']['name'],
                'va_number' => $this->payment_info['bank']['va_number'],
            ] : null,
        ];
    }
}

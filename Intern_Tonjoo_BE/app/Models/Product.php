<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'image', 'price', 'stock',];

    protected $appends = ['image_url'];

    /**
     * Get the image URL.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->image ? asset(str_replace('public/', 'storage/', $this->image)) : $this->image,
        );
    }

}
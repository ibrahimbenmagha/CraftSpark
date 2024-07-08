<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    /**
     * Get the artisans that provide the service.
     */
    public function artisans()
    {
        return $this->hasMany(Artisan::class);
    }
}

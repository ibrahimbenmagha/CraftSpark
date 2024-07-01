<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtisanRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'artisan_id',
        'rating',
        'review',
    ];

    /**
     * Get the artisan that is being rated.
     */
    public function artisan()
    {
        return $this->belongsTo(Artisan::class);
    }
}

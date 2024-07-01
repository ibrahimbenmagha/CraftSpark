<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artisan extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'phone',
        'address',
    ];

    /**
     * Get the user that owns the artisan.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the services provided by the artisan.
     */
    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_artisan');
    }

    /**
     * Get the orders associated with the artisan.
     */
    public function orders()
    {
        return $this->hasMany(Commande::class);
    }

    /**
     * Get the ratings for the artisan.
     */
    public function ratings()
    {
        return $this->hasMany(ArtisanRating::class);
    }

    /**
     * Get the chats associated with the artisan.
     */
    public function chats()
    {
        return $this->hasMany(Chat::class);
    }
}

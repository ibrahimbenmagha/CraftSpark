<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'phone',
        'address',
    ];

    /**
     * Get the user that owns the client.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the orders placed by the client.
     */
    public function orders()
    {
        return $this->hasMany(Commande::class);
    }

    /**
     * Get the ratings for the client.
     */
    public function ratings()
    {
        return $this->hasMany(ClientRating::class);
    }

    /**
     * Get the chats associated with the client.
     */
    public function chats()
    {
        return $this->hasMany(Chat::class);
    }
}

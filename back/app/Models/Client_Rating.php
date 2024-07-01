<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client_Rating extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'rating',
        'review',
    ];

    /**
     * Get the client that is being rated.
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_date',
        'total_price',
        'status',
        'client_id',
        'artisan_id',
        'artisan_service_id',
    ];

    /**
     * Get the client that placed the order.
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * Get the artisan that received the order.
     */
    public function artisan()
    {
        return $this->belongsTo(Artisan::class);
    }

    /**
     * Get the service associated with the order.
     */
    public function service()
    {
        return $this->belongsTo(Service::class, 'artisan_service_id');
    }
}

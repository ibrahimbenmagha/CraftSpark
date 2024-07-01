<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'artisan_id',
        'message',
        'sent_at',
    ];

    /**
     * Get the client that sent the message.
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * Get the artisan that received the message.
     */
    public function artisan()
    {
        return $this->belongsTo(Artisan::class);
    }
}

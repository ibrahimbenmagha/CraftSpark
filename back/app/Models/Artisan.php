<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artisan extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'service',
        'phone',
        'Annes_experiances',
        'address'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function ratings()
    {
        return $this->hasMany(Artisan_Rating::class);
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'services_artisans');
    }

    public function commandes()
    {
        return $this->hasMany(Commande::class);
    }

    public function chats()
    {
        return $this->hasMany(Chat::class);
    }


}

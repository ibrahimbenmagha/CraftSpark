<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service_Artisan extends Model
{
    use HasFactory;

    protected $table = 'services_artisans';

    protected $fillable = [
        'service_id',
        'artisan_id',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function artisan()
    {
        return $this->belongsTo(Artisan::class, 'artisan_id');
    }

    public function commands()
    {
        return $this->hasMany(Commande::class);
    }
}


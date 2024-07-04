<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Carbon\Carbon;

// use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use  HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function artisan()
    {
        return $this->hasOne(Artisan::class);
    }

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->age = Carbon::parse($user->date_naissance)->age;
        });

        static::updating(function ($user) {
            $user->age = Carbon::parse($user->date_naissance)->age;
        });
    }

}

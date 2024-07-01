<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Artisan;


class ArtisanController extends Controller
{
    public function create_artisan(Request $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'address' => $request->input('address'),
            'password' => bcrypt($request->input('password')),
            'role' => 'artisan', 
        ]);

        $advertiser = Artisan::create([
            'phone' => $request->input('phone'),
            'user_id' => $user->id,
            'address' => $request->input('address'),
        ]);

        return response()->json(['message' => 'Artisan created successfully', 'advertiser' => $advertiser], 201);
    }

}

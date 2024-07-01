<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;

class ClientController extends Controller
{


    public function create_client(Request $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'address' => $request->input('address'),
            'password' => bcrypt($request->input('password')),
            'role' => 'client',
        ]);

        $advertiser = Client::create([
            'phone' => $request->input('phone'),
            'user_id' => $user->id,
            'address' => $request->input('address'),
        ]);

        return response()->json(['message' => 'client created successfully', 'advertiser' => $advertiser], 201);
    }

        public function getAllClients()
        {
            $clients = Client::all();
            return response()->json([
                'clients' => $clients
            ], 200);
        }



    public function getClientByUserId($user_id)
    {
        $client = Client::where('user_id', $user_id)->first();
        if (!$client) {
            return response()->json([
                'message' => 'Client not found'
            ], 404);
        }
        return response()->json([
            'client' => $client
        ], 200);
    }


    
    public function getClientById($id)
    {
        $client = Client::find($id);

        if (!$client) {
            return response()->json([
                'message' => 'Client not found'
            ], 404);
        }
        return response()->json([
            'client' => $client
        ], 200);
    }

    
    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;


class ClientController extends Controller
{


    public function create_client(Request $request)
    {
        DB::beginTransaction();
        
        try {
            $user = User::create([
                'name' => $request->input('name'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password')),
                'role' => 'client',
            ]);
    
            $client = Client::create([
                'phone' => $request->input('phone'),
                'user_id' => $user->id,
                'address' => $request->input('address'),
            ]);
    
            DB::commit();
            
            return response()->json(['message' => 'Client created successfully', 'client' => $client], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            
            return response()->json(['message' => 'Failed to create client', 'error' => $e->getMessage()], 500);
        }
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

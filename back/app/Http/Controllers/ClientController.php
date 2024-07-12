<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;


class ClientController extends Controller
{


    public function create_client(Request $request)
    {
        DB::beginTransaction();
    
        try {
            if (User::where('email', $request->input('email'))->exists()) {
                return response()->json([
                    'message' => 'The email already exists'
                ], 409);
            }
    
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->date_naissance = $request->date_naissance;
            $user->role = "client"; // Change "artisan" to "client"
            $user->save();
    
            $client = new Client();
            $client->phone = $request->phone;
            $client->address = $request->address;
    
            // Conversion de l'image en base64
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $client->photo = base64_encode(file_get_contents($image->getRealPath()));
            }
    
            $client->user_id = $user->id;
            $client->save();
    
            DB::commit();
            return response()->json([
                'message' => 'Client created successfully',
                'client' => $client
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Failed to create client',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    

    // public function create_client(Request $request)
    // {
    //     DB::beginTransaction();

    //     try {
    //         if (User::where('email', $request->input('email'))->exists()) {
    //             return response()->json([
    //                 'message' => 'The email already exists'
    //             ], 409);
    //         }


    //         $user = new User();
    //         $user->name = $request->name;
    //         $user->email = $request->email;
    //         $user->password = Hash::make($request->password);
    //         $user->date_naissance = $request->date_naissance;
    //         $user->role = "artisan";
    //         $user->save();

    //         $client = new Client();
    //         $client->phone = $request->phone;
    //         $client->address = $request->address;

    //         // Conversion de l'image en base64
    //         if ($request->hasFile('image')) {
    //             $image = $request->file('image');
    //             $client->photo = base64_encode(file_get_contents($image->getRealPath()));
    //         }

    //         $client->user_id = $user->id;
    //         $client->save();

    //         DB::commit();
    //         return response()->json([
    //             'message' => 'Client created successfully',
    //             'CLIENT' => $client
    //         ], 201);
    //     } catch (\Exception $e) {
    //         DB::rollBack();
    //         return response()->json([
    //             'message' => 'Failed to create client',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }

    public function getAllClients()
    {
        $clients = Client::all();
        return response()->json([
            'clients' => $clients
        ], 200);
    }

    public function getAllClientsInfos()
    {
        try {
            // Récupérer tous les artisans avec les informations utilisateur associées
            $clients = Client::with('user')->get();

            return response()->json([
                'success' => true,
                'clients' => $clients
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la récupération des clients',
                'error' => $e->getMessage()
            ], 500);
        }
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

    // public function create_client(Request $request)
    // {
    //     DB::beginTransaction();

    //     try {
    //         if (User::where('email', $request->input('email'))->exists()) {
    //             return response()->json([
    //                 'message' => 'The email already exists'
    //             ], 409);
    //         }
    //         $user = new User();
    //         $user->name = $request->name;
    //         $user->email = $request->email;
    //         $user->password = Hash::make($request->password);
    //         $user->date_naissance = $request->date_naissance;
    //         $user->role = "client"; // automatically added
    //         $user->save();

    //         $client = new Client();
    //         $client->phone = $request->phone;
    //         $client->address = $request->address;
    //         $client->user_id = $user->id;
    //         $client->save();
    //         DB::commit();

    //         return response()->json([
    //             'message' => 'Client created successfully',
    //             'client' => $client
    //         ], 201);
    //     } catch (\Exception $e) {
    //         // Rollback the transaction
    //         DB::rollBack();

    //         return response()->json([
    //             'message' => 'Failed to create client',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }
}

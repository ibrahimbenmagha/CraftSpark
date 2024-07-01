<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Commande;

class CommandeController extends Controller
{   


    public function CreateCommande(Request $request)
    {
        $request->validate([
            'service_date' => 'required|date',
            'total_price' => 'required|numeric',
            'status' => 'required|in:pending,in progress,completed',
            'client_id' => 'required|exists:clients,id',
            'artisan_id' => 'required|exists:artisans,id',
            'artisan_service_id' => 'required|exists:service_artisan,id',
        ]);

        $commande = new Commande();
        $commande->service_date = $request->input('service_date');
        $commande->total_price = $request->input('total_price');
        $commande->status = $request->input('status');
        $commande->client_id = $request->input('client_id');
        $commande->artisan_id = $request->input('artisan_id');
        $commande->artisan_service_id = $request->input('artisan_service_id');
        $commande->save();
        return response()->json([
            'commande' => $commande,
            'message' => 'Commande created successfully'
        ], 201);
    }



    public function GetAllCommandes()
    {
        $commandes = Commande::all();
        return response()->json([
            'commandes' => $commandes
        ]);
    }
    

    public function getCommandesByUserId($userId)
    {   
    $commandes = Commande::whereHas('client', function ($query) use ($userId) {
        $query->where('user_id', $userId);
    })->get();
    return response()->json([
        'commandes' => $commandes
    ]);
    }

    public function getCommandesByClientId($clientId)
    {
        $commandes = Commande::where('client_id', $clientId)->get();
        return response()->json([
            'commandes' => $commandes
        ]);
    }



    public function getCommandesByArtisanServiceId($artisanServiceId)
    {
    $commandes = Commande::whereHas('artisanService', function ($query) use ($artisanServiceId) {
        $query->where('id', $artisanServiceId);
    })->get();
    return response()->json([
        'commandes' => $commandes
    ]);
    }




}

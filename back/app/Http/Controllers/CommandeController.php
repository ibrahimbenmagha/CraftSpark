<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Commande;

class CommandeController extends Controller
{


    public function CreateCommande(Request $request)
    {
        $commande = new Commande();
        $commande->client_id = $request->input('client_id');
        $commande->artisan_id = $request->input('artisan_id');
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

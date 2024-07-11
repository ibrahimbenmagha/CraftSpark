<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Artisan;
use App\Models\Service;
use App\Models\Commande;


use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;



class ArtisanController extends Controller
{


    // public function create_artisan(Request $request)
    // {
    //     DB::beginTransaction();

    //     try {
    //         if (User::where('email', $request->input('email'))->exists()) {
    //             return response()->json([
    //                 'message' => 'The email already exists'
    //             ], 409);
    //         }
    //         $request->validate([
    //             'name' => 'required|string|max:255',
    //             'email' => 'required|string|email|max:255',
    //             'password' => 'required|string|min:8',
    //             'date_naissance' => 'required|date',
    //             'phone' => 'required|string|max:20',
    //             'address' => 'required|string|max:255',
    //             'service' => 'required|integer|exists:services,id',
    //             'Annes_experiances' => 'required|integer|min:0',
    //             'description' => 'nullable|string',
    //             'photo' => 'nullable|string'
    //         ]);
    //         $user = new User();
    //         $user->name = $request->name;
    //         $user->email = $request->email;
    //         $user->password = Hash::make($request->password);
    //         $user->date_naissance = $request->date_naissance;
    //         $user->role = "artisan"; // automatically added
    //         $user->save();

    //         $artisan = new Artisan();
    //         $artisan->phone = $request->phone;
    //         $artisan->address = $request->address;
    //         $artisan->service = $request->service;
    //         $artisan->Annes_experiances = $request->Annes_experiances;
    //         $artisan->description = $request->description;
    //         $artisan->photo = $request->photo;
    //         $artisan->user_id = $user->id;
    //         $artisan->save();

    //         DB::commit();
    //         return response()->json([
    //             'message' => 'Artisan created successfully',
    //             'artisan' => $artisan
    //         ], 201);
    //     } catch (\Exception $e) {

    //         DB::rollBack();

    //         return response()->json([
    //             'message' => 'Failed to create artisan',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }

    public function create_artisan(Request $request)
    {
        DB::beginTransaction();

        try {
            if (User::where('email', $request->input('email'))->exists()) {
                return response()->json([
                    'message' => 'The email already exists'
                ], 409);
            }

            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:8',
                'date_naissance' => 'required|date',
                'phone' => 'required|string|max:20',
                'address' => 'required|string|max:255',
                'service' => 'required|integer|exists:services,id',
                'Annes_experiances' => 'required|integer|min:0',
                'description' => 'nullable|string',
                'image' => 'nullable|file|mimes:jpg,png|max:2048' // validation du fichier image
            ]);

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->date_naissance = $request->date_naissance;
            $user->role = "artisan"; // automatiquement ajouté
            $user->save();

            $artisan = new Artisan();
            $artisan->phone = $request->phone;
            $artisan->address = $request->address;
            $artisan->service = $request->service;
            $artisan->Annes_experiances = $request->Annes_experiances;
            $artisan->description = $request->description;

            // Conversion de l'image en base64
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $artisan->photo = base64_encode(file_get_contents($image->getRealPath()));
            }

            $artisan->user_id = $user->id;
            $artisan->save();

            DB::commit();
            return response()->json([
                'message' => 'Artisan created successfully',
                'artisan' => $artisan
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Failed to create artisan',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function getAllArtisans()
    {
        $artisans = Artisan::join('users', 'artisans.user_id', '=', 'users.id')
            ->join('services', 'artisans.service', '=', 'services.id')
            ->select(
                'artisans.id',
                'users.name as user_name',
                'services.name as service_name',
                'artisans.phone',
                'artisans.Annes_experiances',
                'artisans.address',
                'artisans.created_at',
                'artisans.updated_at'
            )
            ->get();

        return response()->json([
            'artisans' => $artisans
        ], 200);
    }


    public function getAllArtisansInfo()
    {
        try {
            // Récupérer tous les artisans avec les informations utilisateur associées
            $artisans = Artisan::with('user')->get();

            return response()->json([
                'success' => true,
                'artisans' => $artisans
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la récupération des artisans',
                'error' => $e->getMessage()
            ], 500);
        }
    }




    public function getArtisansWithAllInfos()
    {
        try {
            $artisans = Artisan::leftJoin('artisan_ratings', 'artisans.id', '=', 'artisan_ratings.artisan_id')
                ->join('users', 'artisans.user_id', '=', 'users.id')
                ->join('services', 'artisans.service', '=', 'services.id')
                ->select(
                    'artisans.id',
                    'artisans.user_id',
                    'artisans.phone',
                    'artisans.Annes_experiances',
                    'artisans.photo as artisan_photo',
                    'artisans.description',
                    'artisans.address',
                    'users.name as user_name',
                    'users.email as user_email',
                    'users.date_naissance as user_date_naissance',
                    'services.name as service_name',
                    DB::raw('AVG(artisan_ratings.rating) as average_rating')
                )
                ->groupBy(
                    'artisans.id',
                    'artisans.user_id',
                    'artisans.phone',
                    'artisans.Annes_experiances',
                    'artisans.photo',
                    'artisans.description',
                    'artisans.address',
                    'users.name',
                    'users.email',
                    'users.date_naissance',
                    'services.name'
                )
                ->get();

            return response()->json([
                'message' => 'Artisans retrieved successfully',
                'artisans' => $artisans
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve artisans',
                'error' => $e->getMessage()
            ], 500);
        }
    }




    public function getArtisanById($id)
    {
        $artisan = Artisan::find($id);

        if (!$artisan) {
            return response()->json([
                'message' => 'Artisan not found'
            ], 404);
        }
        return response()->json([
            'artisan' => $artisan
        ], 200);
    }

    public function getArtisanByUserId($userId)
    {
        $artisan = Artisan::where('user_id', $userId)->first();
        if (!$artisan) {
            return response()->json([
                'message' => 'Artisan not found'
            ], 404);
        }
        return response()->json([
            'artisan' => $artisan
        ], 200);
    }

    public function getArtisansByServiceId($serviceId)
    {
        $artisans = Artisan::where('service', $serviceId)->get();

        // Faire quelque chose avec les artisans récupérés, comme les retourner dans une réponse JSON
        return response()->json($artisans);
    }

    public function deleteArtisan($id)
    {
        try {
            DB::beginTransaction();
            $artisan = Artisan::find($id);
            if (!$artisan) {
                return response()->json(['message' => 'Artisan non trouvé'], 404);
            }
            DB::table('artisan_ratings')->where('artisan_id', $id)->delete();
            DB::table('commandes')->where('artisan_id', $id)->delete();
            DB::table('chats')->where('artisan_id', $id)->delete();
            DB::table('services_artisans')->where('artisan_id', $id)->delete();

            $userId = $artisan->user_id;
            $artisan->delete();

            User::findOrFail($userId)->delete();
            DB::commit();

            return response()->json(['message' => 'Artisan et utilisateur associé supprimés avec succès'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Erreur lors de la suppression de l\'artisan et de l\'utilisateur associé', 'error' => $e->getMessage()], 500);
        }
    }
}

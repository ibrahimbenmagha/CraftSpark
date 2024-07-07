<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;



class ArtisanController extends Controller
{

    public function getAllArtisans()
    {
        $artisans = Artisan::all();
        return response()->json([
            'artisans' => $artisans
        ], 200);
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



    public function create_artisan(Request $request)
    {                
        // Start the transaction
        DB::beginTransaction();
        
        try {
            // Check if the email already exists
            if (User::where('email', $request->input('email'))->exists()) {
                return response()->json([
                    'message' => 'The email already exists'
                ], 409); // 409 Conflict
            }
    
            // Create a new user
           
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->date_naissance = $request->date_naissance;
            $user->role = "artisan"; // automatically added
            $user->save();
    
            $artisan = new Artisan();
            $artisan->phone = $request->phone;
            $artisan->address = $request->address;
            $artisan->service = $request->service;
            $artisan->Annes_experiances = $request->Annes_experiances;


            $artisan->user_id = $user->id;
            $artisan->save();
            DB::commit();
            return response()->json([
                'message' => 'Artisan created successfully',
                'artisan' => $artisan
            ], 201);
        } catch (\Exception $e) {
            // Rollback the transaction
            DB::rollBack();
            
            return response()->json([
                'message' => 'Failed to create artisan',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    




}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use App\Models\Artisan;
use Illuminate\Support\Facades\Hash;


    class UserController extends Controller
    {
        public function Create_Admin(Request $request)
        {
            try {
                if (User::where('email', $request->email)->exists()) {
                    return response()->json([
                        'message' => 'The email already exists'
                    ], 409); 
                }
        
                $user = new User();
                $user->name = $request->name;
                $user->email = $request->email;
                $user->password = Hash::make($request->password);
                $user->date_naissance = $request->date_naissance;
                $user->role = "admin"; // automatically added
                $user->save();
        
                return response()->json([
                    'message' => 'User created successfully',
                    'user' => $user
                ], 201);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Failed to create user',
                    'error' => $e->getMessage()
                ], 500);
            }
        }
        
        



    public function GetAllUsers()
    {
        $users = User::all();
            return response()->json([
            'users' => $users
        ], 200);
    }

    public function getUserById($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        return response()->json([
            'user' => $user
        ], 200);
    }

    public function getUsersByRole($role)
    {
        if (!in_array($role, ['client', 'artisan', 'admin'])) {
            return response()->json([
                'message' => 'Invalid role provided'
            ], 400);
        }
        $users = User::where('role', $role)->get();

        return response()->json([
            'users' => $users
        ], 200);
    }



    public function deleteUser($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $client = Client::where('user_id', $id)->first();
        if ($client) {
            $client->delete();
        }
        $artisan = Artisan::where('user_id', $id)->first();
        if ($artisan) {
            $artisan->delete();
        }
        $user->delete();

        return response()->json(['message' => 'User and associated records deleted successfully'], 200);
    }


}

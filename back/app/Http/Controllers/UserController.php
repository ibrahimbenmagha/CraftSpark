<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


    class UserController extends Controller
    {
        public function Create_Admin(Request $request)
    {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
                'role' => 'required|string|in:client,artisan',
            ]);
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->role = "admin"; //automatically added 
            $user->save();
            return response()->json([
                'message' => 'User created successfully',
                'user' => $user
            ], 201);
    }



    public function GetAllUsers()
    {
        // Retrieve all users
        $users = User::all();

        // Return the users in a JSON response
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
        // Validate the role parameter to be either 'client' or 'artisan'
        if (!in_array($role, ['client', 'artisan'])) {
            return response()->json([
                'message' => 'Invalid role provided'
            ], 400);
        }

        // Retrieve users by role
        $users = User::where('role', $role)->get();

        // Return the users in a JSON response
        return response()->json([
            'users' => $users
        ], 200);
    }




  

}

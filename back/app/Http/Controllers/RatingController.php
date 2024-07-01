<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artisan_Rating;
use App\Models\Client_Rating;

class RatingController extends Controller
{



    public function CreateArtisanRating(Request $request)
    {
        $validatedData = $request->validate([
            'artisan_id' => 'required|exists:artisans,id',
            'rating' => 'required|integer|min:1|max:5',
            'review' => 'nullable|string'
        ]);
        $rating = Artisan_Rating::create($validatedData);

        return response()->json(['message' => 'Rating added successfully', 'rating' => $rating], 201);
    }



    public function CreateClientRating(Request $request)
    {
        $validatedData = $request->validate([
            'client_id' => 'required|exists:clients,id',
            'rating' => 'required|integer|min:1|max:5',
            'review' => 'nullable|string'
        ]);
        $rating = Client_Rating::create($validatedData);
        return response()->json(['message' => 'Rating added successfully', 'rating' => $rating], 201);
    }


}

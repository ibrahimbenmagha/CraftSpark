<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service_Artisan;
use App\Models\Artisan;



class ServceArtisanController extends Controller
{
    
    public function CreateServceArtisan(Request $request)
    {
        // Validate the request
        $request->validate([
            'artisan_id' => 'required|exists:artisans,id',
            'service_id' => 'required|exists:services,id',
        ]);
        $serviceArtisan = new Service_Artisan();
        $serviceArtisan->artisan_id = $request->input('artisan_id');
        $serviceArtisan->service_id = $request->input('service_id');
        $serviceArtisan->save();
        return response()->json([
            'service_artisan' => $serviceArtisan,
            'message' => 'Service added to artisan successfully'
        ], 201);
    }


    public function getAllServceArtisan()
    {
        $serviceArtisans = Service_Artisan::all();

        return response()->json([
            'service_artisans' => $serviceArtisans
        ]);
    }



    public function getServceArtisanById($id)
    {
        $serviceArtisan = Service_Artisan::findOrFail($id);

        // Return the service_artisan entry
        return response()->json([
            'service_artisan' => $serviceArtisan
        ]);
    }


    


}

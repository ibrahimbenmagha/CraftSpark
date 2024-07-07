<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service_Artisan;
use App\Models\Artisan;



class ServceArtisanController extends Controller
{
    
    public function createServiceArtisan(Request $request)
    {
        $serviceArtisan = new Service_Artisan();
        // $serviceArtisan->artisan_id = $request->input('artisan_id');
        // $serviceArtisan->service_id = $request->input('service_id');
        $serviceArtisan->artisan_id = $request->artisan_id;
        $serviceArtisan->service_id = $request->service_id;
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


    public function getServceArtisanByArtisanId($artisanId)
    {
        $services = Service_Artisan::where('artisan_id', $artisanId)->get();

        return response()->json(['services' => $services], 200);
    }

    


}

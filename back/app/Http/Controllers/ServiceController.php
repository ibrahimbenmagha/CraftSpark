<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;


class ServiceController extends Controller
{
    public function create_service(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:services',
        ]);
        $service = Service::create([
            'name' => $request->name,
        ]);
        return response()->json([
            'message' => 'Service created successfully',
            'service' => $service
        ], 201);
    }


    public function getAllServices()
    {
        $services = Service::all();

        return response()->json([
            'services' => $services
        ], 200);
    }

    

    public function getServiceById($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'message' => 'Service not found'
            ], 404);
        }
    }



}
    
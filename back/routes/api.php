<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArtisanController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ServiceController;








/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/CreateAdmin', [UserController::class, 'create_client']);
Route::post('/CreatClient', [ClientController::class, 'create_client']);
Route::post('/CreateArtisan', [ArtisanController::class, 'create_artisan']);
Route::post('/create_service', [ServiceController::class, 'create_service']);



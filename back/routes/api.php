<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArtisanController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServceArtisanController;






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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
    
Route::post('login', [AuthController::class, 'login']);


Route::post('Create_Admin', [UserController::class, 'Create_Admin']); // It works
Route::get('getUserById/{id}', [UserController::class, 'getUserById']); // it works 
Route::get('getUsersByRole/{role}', [UserController::class, 'getUsersByRole']); //it works
Route::get('GetAllUsers', [UserController::class, 'GetAllUsers']); // It works 
Route::delete('deleteUser/{id}', [UserController::class, 'deleteUser']);


Route::post('create_client',[ClientController::class,'create_client']); //it works
Route::get('getClientByUserId/{user_id}',[ClientController::class,'getClientByUserId']); //it works
Route::get('getClientById/{id}',[ClientController::class,'getClientById']);//it works
Route::get('getAllClients',[ClientController::class,'getAllClients']);//it works
Route::get('getAllClientsInfos',[ClientController::class,'getAllClientsInfos']);//it works





Route::post('create_artisan',[ArtisanController::class,'create_artisan']); //it works
Route::get('getAllArtisans',[ArtisanController::class,'getAllArtisans']);
Route::get('getAllArtisansInfo',[ArtisanController::class,'getAllArtisansInfo']);
Route::get('getArtisansWithAllInfos',[ArtisanController::class,'getArtisansWithAllInfos']);
Route::get('getArtisansWithAllInfosById/{id}',[ArtisanController::class,'getArtisansWithAllInfosById']);


Route::get('getArtisanById/{id}',[ArtisanController::class,'getArtisanById']);
Route::get('getArtisanByUserId/{userId}',[ArtisanController::class,'getArtisanByUserId']);
Route::get('getArtisansByServiceId/{serviceId}',[ArtisanController::class,'getArtisansByServiceId']);
Route::delete('/deleteArtisan/{id}', [ArtisanController::class, 'deleteArtisan']);



Route::post('create_service', [ServiceController::class, 'create_service']);
Route::get('getAllServices', [ServiceController::class, 'getAllServices']);
Route::get('getServiceById/{id}', [ServiceController::class, 'getServiceById']);




Route::post('CreateCommande', [CommandeController::class, 'CreateCommande']);
Route::get('GetAllCommandes', [CommandeController::class, 'GetAllCommandes']);
Route::get('getCommandesByUserId/{userId}', [CommandeController::class, 'getCommandesByUserId']);
Route::get('getCommandesByClientId/{clientId}', [CommandeController::class, 'getCommandesByClientId']);
Route::get('getCommandesByArtisanServiceId/{artisanServiceId}', [CommandeController::class, 'getCommandesByArtisanServiceId']);



Route::post('CreateArtisanRating', [RatingController::class, 'CreateArtisanRating']);
Route::post('CreateClientRating', [RatingController::class, 'CreateClientRating']);
//25





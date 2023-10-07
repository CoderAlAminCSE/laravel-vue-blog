<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

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

// authentication rotues
Route::post('register', [RegisteredUserController::class, 'store']);
Route::middleware('auth:sanctum')->post('logout', [AuthenticatedSessionController::class, 'destroy']);
Route::post('login', [AuthenticatedSessionController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// category related routes
Route::middleware('auth:sanctum')->post('/categories/create', [CategoryController::class, 'store']);
Route::middleware('auth:sanctum')->get('/categories', [CategoryController::class, 'index']);
Route::middleware('auth:sanctum')->get('/category/{id}', [CategoryController::class, 'show']);
Route::middleware('auth:sanctum')->put('/category/{id}', [CategoryController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/category/delete/{id}', [CategoryController::class, 'delete']);

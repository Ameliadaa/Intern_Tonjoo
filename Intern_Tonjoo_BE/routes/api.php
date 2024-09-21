<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'index']);

Route::post('/upload', [ImageController::class, 'upload']);
Route::get('/images', [ImageController::class, 'index']);
Route::get('/images/{id}', [ImageController::class, 'show']);
Route::put('/images/{id}', [ImageController::class, 'update']);
Route::delete('/images/{id}', [ImageController::class, 'destroy']);

<?php
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/rooms', [App\Http\Controllers\Api\RoomController::class, 'index'])->name('room');
Route::post('/rooms', function(){return 'rooms';});
Route::put('/rooms', function(){return 'rooms';});
Route::delete('/rooms', function(){return 'rooms';});
Route::get('/rooms', function(){return 'rooms';});
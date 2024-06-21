<?php

use App\Http\Controllers\Customer\ReservationCustomerController;
use App\Http\Controllers\Customer\ReviewCustomerController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Customer/Home');
})->name('home');
Route::get('/service', function () {
    $services = Service::all();

    return Inertia::render('Customer/Service', compact('services'));
})->name('service');
Route::get('/product', function () {
    $products = Product::all();

    return Inertia::render('Customer/Product', compact('products'));
})->name('product');
Route::get('/review', function () {
    $reviews = Review::with(['users'])->paginate(6);

    return Inertia::render('Customer/Review', compact('reviews'));
})->name('review');


Route::get('/dashboard', function () {
    return Inertia::render('Customer/Review');
})->name('dashboard');

Route::group(['middleware' => 'role:admin'], function () {
    Route::prefix('admin')->group(function () {
        Route::resources([

        ]);
    });
});

Route::group(['middleware' => 'role:customer'], function () {
    Route::prefix('customer')->group(function () {
        Route::resources([
            'reservation' => ReservationCustomerController::class,
            'review' => ReviewCustomerController::class
        ]);
    });
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';

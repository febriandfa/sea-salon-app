<?php

use App\Http\Controllers\Customer\ReservationCustomerController;
use App\Http\Controllers\Customer\ReviewCustomerController;
use App\Http\Controllers\Customer\ServiceCustomerController;
use App\Http\Controllers\ProfileController;
use App\Models\Contact;
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
    $contacts = Contact::with(['users'])->get();

    return Inertia::render('Customer/Home', compact('contacts'));
})->name('home');
Route::get('/product', function () {
    $contacts = Contact::with(['users'])->get();
    $products = Product::all();

    return Inertia::render('Customer/Product', compact('contacts', 'products'));
})->name('product');

Route::resources([
    'service' => ServiceCustomerController::class,
    'review' => ReviewCustomerController::class
]);

Route::get('/dashboard', function () {
    return Inertia::render('Customer/Review');
})->name('dashboard');

Route::group(['middleware' => 'role:admin'], function () {
    Route::prefix('admin')->group(function () {
        Route::resources([

        ]);
    });
});

Route::group(['middleware' => ['auth', 'role:customer']], function () {
    Route::prefix('customer')->group(function () {
        Route::resources([
            'reservation' => ReservationCustomerController::class,
            // 'review' => ReviewCustomerController::class
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

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'phone_number' => 'required|numeric|digits_between:11,12',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'role' => 'customer',
            'password' => Hash::make($request->password),
        ]);
        $user->assignRole('customer');

        event(new Registered($user));

        Auth::login($user);

        if (Auth::user()->hasRole('admin')) {
            return redirect()->intended(RouteServiceProvider::HOME_ADMIN);
        } else if (Auth::user()->hasRole('customer')) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        // return redirect(RouteServiceProvider::HOME);
    }
}

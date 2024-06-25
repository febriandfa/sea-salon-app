<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\BranchService;
use App\Models\Contact;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::with(['users'])->get();
        $services = Service::all();

        return Inertia::render('Landing/Service', compact('contacts', 'services'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contacts = Contact::with(['users'])->get();
        $service = Service::where('id', $id)->first();
        $branchServices = BranchService::where('service_id', $id)->with(['branches', 'services'])->get();

        return Inertia::render('Landing/Reservation', compact('contacts', 'service', 'branchServices'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

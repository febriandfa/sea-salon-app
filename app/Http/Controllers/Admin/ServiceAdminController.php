<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BranchService;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all();

        return Inertia::render('Admin/Service/ServiceIndex', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Service/ServiceCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Service::create([
            'name' => $request->name,
            'duration' => $request->duration,
            'price' => $request->price,
            'description' => $request->description,
            'member_only' => $request->member_only
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $service = Service::where('id', $id)->first();

        return Inertia::render('Admin/Service/ServiceShow', compact('service'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $service = Service::where('id', $id)->first();

        return Inertia::render('Admin/Service/ServiceEdit', compact('service'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $service = Service::where('id', $id);
        $serviceUpdate = $request->only(['name', 'duration', 'price', 'description', 'member_only']);
        $service->update($serviceUpdate);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Service::where('id', $id)->delete();
        BranchService::where('service_id', $id)->delete();
    }
}

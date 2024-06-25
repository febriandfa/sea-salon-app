<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\BranchService;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BranchAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $branches = Branch::all();

        return Inertia::render('Admin/Branch/BranchIndex', compact('branches'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $services = Service::all();

        return Inertia::render('Admin/Branch/BranchCreate', compact('services'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $branch = Branch::create([
            'name' => $request->name,
            'location' => $request->location,
            'open_time' => $request->open_time,
            'close_time' => $request->close_time
        ]);

        $serviceIds = $request->availableServices;

        foreach ($serviceIds as $serviceId) {
            BranchService::create([
                'branch_id' => $branch->id,
                'service_id' => $serviceId
            ]);
        }

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $branch = Branch::where('id', $id)->with(['branchServices'])->first();

        $services = Service::all();

        return Inertia::render('Admin/Branch/BranchShow', compact('branch', 'services'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $branch = Branch::where('id', $id)->with(['branchServices'])->first();

        $services = Service::all();

        return Inertia::render('Admin/Branch/BranchEdit', compact('branch', 'services'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $branch = Branch::where('id', $id);
        $branchUpdate = $request->only(['name', 'location', 'open_time', 'close_time']);
        $branch->update($branchUpdate);

        BranchService::where('branch_id', $id)->delete();

        $serviceIds = $request->availableServices;

        foreach ($serviceIds as $serviceId) {
            BranchService::create([
                'branch_id' => $id,
                'service_id' => $serviceId
            ]);
        }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Branch::where('id', $id)->delete();
        BranchService::where('branch_id', $id)->delete();
    }
}

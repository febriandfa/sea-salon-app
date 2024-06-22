<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Reservation;
use App\Models\Service;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReservationCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations = Reservation::where('user_id', Auth::user()->id)->get();

        return Inertia::render('Customer/Reservation/IndexReservation', compact('reservation'));
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
        $reservation = Reservation::create([
            'name' => $request->name,
            'phone_number' => $request->phone_number,
            'service_id' => $request->service_id,
            'branch_id' => $request->branch_id,
            'date' => $request->date,
            'time' => $request->time
        ]);

        return back();
        // return response()->json(['id' => $reservation->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation = Reservation::where('id', $id)->first();

        return Inertia::render('Customer/Reservation/ShowReservation', compact('reservation'));
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
        $reservation = Reservation::find($id);
        $reservationUpdate = $request->only(['service_id', 'datetime']);

        $reservation->update($reservationUpdate);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservation = Reservation::find($id);

        $reservation->delete();

        return back();
    }

    public function download($custName, $custPhone, $serviceId, $branchId, $date, $time)
    {
        $serviceName = Service::where('id', $serviceId)->first()->name;
        $branchName = Branch::where('id', $branchId)->first()->name;

        $pdf = Pdf::loadView('reservation_pdf', compact('custName', 'custPhone', 'serviceName', 'branchName', 'date', 'time'));

        return $pdf->download('reservation.pdf');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $table = 'reservations';

    protected $fillable = [
        'user_id',
        'name',
        'phone_number',
        'service_id',
        'branch_id',
        'date',
        'time'
    ];

    public function services() {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }

    public function branches() {
        return $this->belongsTo(Branch::class, 'branch_id', 'id');
    }

    public function users() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}

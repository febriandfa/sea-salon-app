<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table = 'services';

    protected $fillable = [
        'name',
        'duration',
        'price',
        'description',
        'member_only'
    ];

    public function reservations() {
        return $this->hasMany(Reservation::class, 'service_id', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchService extends Model
{
    use HasFactory;

    protected $table = 'branch_services';

    protected $fillable = [
        'branch_id',
        'service_id'
    ];

    public function branches() {
        return $this->belongsTo(Branch::class, 'branch_id', 'id');
    }

    public function services() {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }
}

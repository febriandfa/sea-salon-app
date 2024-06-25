<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $table = 'branches';

    protected $fillable = [
        'name',
        'location',
        'open_time',
        'close_time'
    ];

    public function branchServices() {
        return $this->hasMany(BranchService::class, 'branch_id', 'id');
    }
}

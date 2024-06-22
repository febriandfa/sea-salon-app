<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\BranchService;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $branches = Branch::all();
        $services = Service::all();

        foreach ($branches as $branch) {
            foreach ($services as $service) {
                $exists = BranchService::where('branch_id', $branch->id)
                    ->where('service_id', $service->id)
                    ->exists();

                if (!$exists) {
                    BranchService::create([
                        'branch_id' => $branch->id,
                        'service_id' => $service->id,
                    ]);
                }
            }
        }
    }
}

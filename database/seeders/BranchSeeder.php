<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $branches = [
            [
                'name' => 'SEA Salon Sidoarjo',
                'location' => 'Jl. Pasir Raya, Belijon, Wedi, Kec. Gedangan, Kabupaten Sidoarjo, Jawa Timur 61254',
                'open_time' => '09:00:00',
                'close_time' => '21:00:00'
            ],
            [
                'name' => 'SEA Salon Malang',
                'location' => 'Jl. Arjuno No.36, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119',
                'open_time' => '09:00:00',
                'close_time' => '16:00:00'
            ],
            [
                'name' => 'SEA Salon Surabaya',
                'location' => 'Komplek Darmo Satelit, Jl. Satelit Indah II, Tanjungsari, Kec. Sukomanunggal, Surabaya, Jawa Timur 60187',
                'open_time' => '09:00:00',
                'close_time' => '22:00:00'
            ],
            [
                'name' => 'SEA Salon Pasuruan',
                'location' => 'Jl. Panglima Sudirman No.29, Purworejo, Kec. Purworejo, Kota Pasuruan, Jawa Timur 67115',
                'open_time' => '10:00:00',
                'close_time' => '15:00:00'
            ]
        ];

        foreach ($branches as $branch) {
            $branch = Branch::create([
                'name' => $branch['name'],
                'location' => $branch['location'],
                'open_time' => $branch['open_time'],
                'close_time' => $branch['close_time'],
            ]);
        }
    }
}

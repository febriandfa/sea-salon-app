<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'name' => 'Massage',
                'duration' => '60',
                'price' => '100000',
                'description' => fake()->paragraph
            ],
            [
                'name' => 'Haircut',
                'duration' => '60',
                'price' => '70000',
                'description' => fake()->paragraph
            ]
        ];

        foreach ($services as $service) {
            $service = Service::create([
                'name' => $service['name'],
                'duration' => $service['duration'],
                'price' => $service['price'],
                'description' => $service['description'],
            ]);
        }
    }
}

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
                'name' => 'Haircuts and Styling',
                'duration' => '60',
                'price' => '100000',
                'description' => fake()->paragraph,
                'member_only' => 'N'
            ],
            [
                'name' => 'Manicure and Pedicure',
                'duration' => '60',
                'price' => '70000',
                'description' => fake()->paragraph,
                'member_only' => 'Y'
            ],
            [
                'name' => 'Facial Treatments',
                'duration' => '60',
                'price' => '85000',
                'description' => fake()->paragraph,
                'member_only' => 'N'
            ]
        ];

        foreach ($services as $service) {
            $service = Service::create([
                'name' => $service['name'],
                'duration' => $service['duration'],
                'price' => $service['price'],
                'description' => $service['description'],
                'member_only' => $service['member_only']
            ]);
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Shampoo',
                'price' => '30000',
                'description' => fake()->paragraph
            ],
            [
                'name' => 'Conditioner',
                'price' => '40000',
                'description' => fake()->paragraph
            ]
        ];

        foreach ($products as $product) {
            $product = Product::create([
                'name' => $product['name'],
                'price' => $product['price'],
                'description' => $product['description'],
            ]);
        }
    }
}

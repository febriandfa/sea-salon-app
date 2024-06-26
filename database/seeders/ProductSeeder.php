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
                'description' => fake()->paragraph,
                'img' => 'sea-shampoo.jpg'
            ],
            [
                'name' => 'Conditioner',
                'price' => '40000',
                'description' => fake()->paragraph,
                'img' => 'sea-conditioner.jpg'
            ],
            [
                'name' => 'Face Wash',
                'price' => '100000',
                'description' => fake()->paragraph,
                'img' => 'sea-facewash.jpg'
            ],
        ];

        foreach ($products as $product) {
            $product = Product::create([
                'name' => $product['name'],
                'price' => $product['price'],
                'description' => $product['description'],
                'img' => $product['img']
            ]);
        }
    }
}

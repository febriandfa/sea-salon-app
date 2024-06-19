<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Thomas N',
            'email' => 'thomas.n@compfest.id',
            'phone_number' => '08123456789',
            'role' => 'admin',
            'password' => 'Admin123'
        ]);
        $admin->assignRole('admin');

        $cust = User::create([
            'name' => 'Febrian D',
            'email' => 'febrian.d@compfest.id',
            'phone_number' => '08123456789',
            'role' => 'customer',
            'password' => 'Customer123'
        ]);
        $cust->assignRole('customer');
    }
}

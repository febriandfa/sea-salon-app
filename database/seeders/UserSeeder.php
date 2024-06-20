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
        $users = [
            [
                'name' => 'Thomas N',
                'email' => 'thomas.n@compfest.id',
                'phone_number' => '08123456789',
                'role' => 'admin',
                'password' => 'Admin123',
            ],
            [
                'name' => 'Febrian D',
                'email' => 'febrian.d@compfest.id',
                'phone_number' => '088888888888',
                'role' => 'customer',
                'password' => 'Customer123',
            ],
            [
                'name' => 'Eka P',
                'email' => 'eka.p@compfest.id',
                'phone_number' => '081111111111',
                'role' => 'employee',
                'password' => 'Employee123',
            ],
        ];

        foreach ($users as $user) {
            $user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'phone_number' => $user['phone_number'],
                'role' => $user['role'],
                'password' => $user['password'],
            ]);
            $user->assignRole($user['role']);
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contacts = [
            [
                'name' => 'Thomas',
                'phone_number' => '08123456789'
            ],
            [
                'name' => 'Sekar',
                'phone_number' => '08164829372'
            ]
        ];

        foreach ($contacts as $contact) {
            $contact = Contact::create([
                'name' => $contact['name'],
                'phone_number' => $contact['phone_number']
            ]);
        }
    }
}

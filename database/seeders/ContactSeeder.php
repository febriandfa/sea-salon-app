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
                'user_id' => '1',
            ],
            [
                'user_id' => '2',
            ]
        ];

        foreach ($contacts as $contact) {
            $contact = Contact::create([
                'user_id' => $contact['user_id'],
            ]);
        }
    }
}

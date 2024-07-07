<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('services')->insert([
            ['name' => 'Plomberie', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Électricité', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Menuiserie', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Peinture', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Paysagisme', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Maçonnerie', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Chauffage', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Climatisation', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Serrurerie', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Nettoyage', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}

